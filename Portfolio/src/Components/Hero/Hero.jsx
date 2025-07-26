import React from 'react'
import profilePic from "../../assets/hero/profilePic.png";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Satendra</h1>
                <p className={styles.description}>
                    Frontend Developer with 2.5+ years of experience building scalable, accessible web applications using React.js, Redux,
                    JavaScript, and TypeScript.
                </p>
                <a className={styles.contactBtn} href='mailto:iamsatndra@gmail.com'>Contact Me</a>
            </div>
            <img className={styles.heroImg} src={profilePic} alt='hero-img' />

            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />

        </section>
    )
}

