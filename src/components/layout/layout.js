import React from "react"
import styles from "./layout.module.scss"
import { StaticQuery, graphql } from "gatsby"

console.log(styles)



export default ({ children }) => (
    <StaticQuery
        query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
        }
        render={data => (
            <div className={styles.container}>
                
                {children}

            </div>
        )}
    />
)