import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MouseMoveAnimation from "../components/mouseMove"

const IndexPage = () => (
  <Layout>
    <section className='hero flex flex-c justify-center align-center'>
      <header className='uppercase flex justify-between'>
        <p>An Animation Demo</p> <p>©2023</p>
      </header>
      <MouseMoveAnimation />
      <footer className='uppercase flex justify-between'>
        <p>Purely Using CSS & JS</p> <p>Random Text</p>
      </footer>
    </section>
  </Layout>
)

export const Head = () => <Seo title='Home' />

export default IndexPage
