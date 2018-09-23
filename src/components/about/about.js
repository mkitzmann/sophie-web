import React from "react";
import styles from "./about.module.scss"

export default () => (

    <section id="about" className={styles.container}>
        <div class="wrapper flex-container">
            <div class="flex-column flex-2">
                <h2>Grafikdesign aus Hamburg</h2>
                <p class="indent-left">
                    Ich betreue Sie gerne auf dem Weg zu Ihrem optimalen Endprodukt und zusammen entwickeln wir klare, anspruchsvolle Designs, die Ihren Ansprüchen gerecht werden.
                    Wenn Sie interesse an einer Zusammenarbeit haben
                    Kontaktieren Sie mich oder werfen Sie einen Blick auf meine Projekte:
                </p>
            </div>
            <div class="flex-column flex-1">
                <h2>Leistungen</h2>
                
                <ul className={styles.list}>
                    <li>Grafikdesign</li>
                    <li>Kartengestaltung</li>
                    <li>Buchgestaltung</li>
                    <li>Hochzeitspapeterie</li>
                    <li>Beschilderung</li>
                    <li>Webdesign</li>
                </ul>
            </div>
        </div>
    </section>

);