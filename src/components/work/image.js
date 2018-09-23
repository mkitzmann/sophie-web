import React from "react";
import styles from "./work.module.scss"

export default props => (
    <div className={styles.test}>
        <img src={props.image} alt="" className={styles.image} />
    </div>
)