import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <div>Hello world</div>

            {data.allFile.edges.map(({ node }, index) => (
                <div key={index}>
                    <div>{node.relativePath}</div>

                    <div>{node.prettySize}</div>

                    <div>{node.extension}</div>

                    <div>{node.birthTime}</div>
                </div>
            ))}
        </Layout>
    )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`