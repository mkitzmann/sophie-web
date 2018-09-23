import React from "react";
import styles from "./contact.module.scss"

var email = "welcome@kitzmann.design";
var emailLink = "mailto:"+email;

export default () => (

    <section id="about" className={styles.container}>
        <div class="wrapper flex-container">
            <div class="flex-column flex-1">
                <img src="/img/5660cd3a408baf86a904f3173d053f2a.jpeg" alt="" className={styles.image} />
            </div>
            <div class="flex-column flex-2">
                <h2>Thats Me</h2>
                
                
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <br/>

                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

                <a href={emailLink} className={styles.emailLink}>{email}</a>
                
            </div>
        </div>
    </section>

);