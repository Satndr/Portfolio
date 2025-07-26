import React, { useState, useEffect } from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsContainer}>
        <div className={styles.projects}>
          {projects.map((project, id) => (
            <div
              key={id}
              className={`${styles.projectCard} ${
                id === currentProject ? styles.active : styles.inactive
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <div className={styles.indicators}>
          {projects.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentProject ? styles.activeIndicator : ""
              }`}
              onClick={() => goToProject(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};