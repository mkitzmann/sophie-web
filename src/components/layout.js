import React from "react"
import styles from "./layout.module.css"
import { StaticQuery, Link, graphql } from "gatsby"

console.log(styles)

const ListLink = props => (
    <li style={{ display: "inline-block", marginRight: "1rem" }}>
        <Link to={props.to} className={styles.link}>
            {props.children}
        </Link>
    </li>
)

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
                <header className={styles.header}>

                    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>

                        <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>

                    </Link>

                    <ul style={{ listStyle: `none`, float: `right` }}>

                        <ListLink to="/" color="blue">Home</ListLink>

                        <ListLink to="/about/" color="red">About</ListLink>

                        <ListLink to="/contact/">Contact</ListLink>

                    </ul>

                </header>
                {children}

                <footer className={styles.footer}>
                    Sophie Kitzmann
        </footer>
            </div>
        )}
    />
)