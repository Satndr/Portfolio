import React from 'react';
import styles from "./About.module.css";
import aboutImage from "../../assets/about/aboutImageNew.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I’m a frontend developer with 2.5+ years of experience building scalable and accessible web applications using React.js, TypeScript, and modern UI frameworks.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Enterprise icon" />
            <div className={styles.aboutItemText}>
              <h3>Enterprise Applications</h3>
              <p>
                Experienced in creating real-time chat interfaces, AI integrations, and business workflows using tools like CometD, OpenAI API, and IBM Graphite (app.xml).
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Engineer</h3>
              <p>
                I focus on building clean, responsive interfaces with TailwindCSS and Material-UI, while ensuring WCAG-compliant accessibility and performance optimization.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
