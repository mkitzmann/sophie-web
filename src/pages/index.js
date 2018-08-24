import React from "react"
import { graphql } from "gatsby"
import Container from "../components/layout"

export default ({data}) => (
    <Container>
        <div>
            <h1>{data.site.siteMetadata.title}</h1>
            <p>
                What do I like to do? Lots of course but definitely enjoy building
                websites.
            </p>
        </div>
    </Container>
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