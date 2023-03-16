/* eslint-disable @next/next/no-sync-scripts */
import { Hero, Layout, About, Jobs, Projects, Contact } from '@components/index'
import { readdirSync } from "fs"
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home(props: any) {

  const route = useRouter()

  const location = { pathName: "home" }

  return (
    <>
      < Head >
        <title>Ximena Anzola Developer</title>
      </Head >
      <Layout location={location}>
        <h1>{route.asPath}</h1>
        <Hero />
        <About />
        <Jobs data={props.jobs || []} />
        <Projects data={props.projects || []} />
        <Contact />
      </Layout>
    </>
  )
}


export async function getStaticProps({ ...ctx }) {

  //leer una archivo

  const folders = readdirSync("content/job/")

  const jobs = folders.map(company => {

    //[]
    const arrayJobsByCompany = readdirSync(`content/job/${company}`)

    //[objectData,objectData]
    const readedJobs = arrayJobsByCompany.map( job => {

      const jobData = require(`content/job/${company}/${job}/index.md`)

      return jobData.attributes

    })

    return readedJobs

  }).flat(2)



  const folderProjects = readdirSync("content/projects")
  console.log('proyectos', folderProjects);


  const projects = folderProjects.map(project => {

    const projectData = require(`content/projects/${project}`)
      return projectData.attributes

    })


  return {
    props: {
      jobs,
      projects,
    }
  }
}