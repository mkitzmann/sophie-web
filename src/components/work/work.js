import React from "react";
import styles from "./work.module.scss"
import Image from "./image";

var images = [
    {image: "laptop.jpg"},
    {image: "7a7de04339d0a16d5737cbf901fedb9e.jpeg"},
    {image: "205ea3c1691227cd2a9aa4575b0179fd.jpeg"},
];

export default () => (

    <section id="work" className={styles.container}>
        <div className="wrapper flex-container flex-wrap">
            {images.map(({image}) => {
                return (
                    <Image image={image}></Image>
                )
                }
            )}
        </div>
    </section>

);