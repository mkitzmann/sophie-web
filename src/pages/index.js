import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Work from "../components/work/work";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";

export default ({data}) => (
    <Layout>
      <Hero></Hero>
      <About></About>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`