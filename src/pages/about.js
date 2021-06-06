import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const About = () => {
  return (
    <div>
      <Layout>
        <h1>About.</h1>
        <p>About Content will display here.</p>
        <Link to="/contact">Contact.</Link>
      </Layout>
    </div>
  )
}

export default About
