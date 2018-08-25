import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero";

export default ({data}) => (
    <Layout>
      <Hero></Hero>
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