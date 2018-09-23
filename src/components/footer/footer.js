import React from "react";
import styles from "./footer.module.scss"

export default () => (

    <section id="footer" className={styles.container}>
        <div class="wrapper flex-container flex-space">
            <div class="flex-column">
                Copyright Sophie Kitzmann
            </div>
            <div class="flex-column">
                Impressum | Datenschutz
            </div>
        </div>
    </section>

);