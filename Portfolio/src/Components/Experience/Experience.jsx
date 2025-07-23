import React from 'react'
import styles from './Experience.module.css';
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../util";
import html from "../../assets/skills/html.png";

const images = import.meta.glob('../../assets/skills/*.png', { eager: true });
const images1 = import.meta.glob('../../assets/history/*.png', { eager: true });

const getImagePath1 = (name) => {
    const match = Object.entries(images1).find(([key]) =>
        key.endsWith(`/${name}.png`)
    );
    return match ? match[1].default : '';
};

const getImagePath = (name) => {
    const match = Object.entries(images).find(([key]) =>
        key.endsWith(`/${name}.png`)
    );
    return match ? match[1].default : '';
};

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        const imgSrc = getImagePath(skill.imageSrc);
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={imgSrc} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        const imgSrc1 = getImagePath1(historyItem.imageSrc1); console.log(`hey ${imgSrc1}`);

                        return (
                            <li key={id} className={styles.historyItem}>
                                <img src={imgSrc1} alt={`${historyItem.organisation} Logo`}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((experience, id) => {
                                            return <li key={id}>{experience}</li>;
                                        })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};