import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anupam</h1>
        <h1 className={styles.titles}>A passionate Full Stack Web Developer</h1>
        <p className={styles.description}>
        I am a enthusiastic professional, committed to new opportunities and challenges. My passion for continuous learning drives me to enhance my skills and deliver exceptional results. 
        </p>
        <a href={getImageUrl("CV/Resume.pdf")} className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
          Check Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
