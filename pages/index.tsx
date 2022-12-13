import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
// import Layout from '../components/Layout'


export default function Home() {
  const location = {pathName: "home"}

  return (
    <Layout location={location}>
      {/* <Hero />
      <About />
      <Jobs />
      <Projects />
      <Contact /> */}
    </Layout>
  )
}
