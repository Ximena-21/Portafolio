/* eslint-disable @next/next/no-sync-scripts */
import { Hero, Layout, About, Jobs } from '@components/index'
import { readFileSync, readdirSync } from "fs"
// import glob from "glob";
import matter from 'gray-matter'
import Head from 'next/head'
// import Head from 'next/head'
// import Image from 'next/image'
// import Layout from '../components/Layout'

export default function Home(props: any) {

  console.log("here is my home props >>>>>>>>><", props)

  // const { jobs } = props

  const location = { pathName: "home" }



  return (
    <>
      < Head >
        {/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script> */}
      </Head >
      <Layout location={location}>
        <Hero />
        <About />
        <Jobs data={props.jobs || []} />
        {/* <About />
      <Jobs />
      <Projects />
      <Contact /> */}
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


  return {
    props: {
      jobs
    }
  }
}