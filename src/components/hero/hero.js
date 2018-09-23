import React from "react";
import styles from "./hero.module.scss"
import { Link } from "gatsby"

const ListLink = props => (
    <li className={styles.linkwrapper}>
        <Link to={props.to} className={styles.link}>
            {props.children}
        </Link>
    </li>
)

export default () => (

    <section className={styles.container}>

        <ul className={styles.navigation}>

            <ListLink to="#about">Info</ListLink>
            <ListLink to="#work">Arbeiten</ListLink>
            <ListLink to="#contact">Kontakt</ListLink>

        </ul>
        <div className={styles.logowrapper}>
            <img src="/img/skg-logo.svg" alt="" className={styles.logo} />
        </div>

        <Link to="#about" className={styles.arrowrapper}>
            <i className={styles.arrowdown}></i>
        </Link>

    </section>

);