import { Hero, Layout, About } from '@components/index'
// import Head from 'next/head'
// import Image from 'next/image'
// import Layout from '../components/Layout'


export default function Home() {
  const location = {pathName: "home"}

  return (
    <Layout location={location}>
      <Hero />
      <About />
      {/* <About />
      <Jobs />
      <Projects />
      <Contact /> */}
    </Layout>
  )
}
