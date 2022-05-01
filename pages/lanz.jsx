import React from 'react';
import LanzIntro from './lanzintro';
import LanzGit from './lanzgit';
import Link from "next/link";
import styles from "../styles/Lanz.module.css";

const lanz = () => (
    <div className={styles.lanz}>
      <LanzIntro></LanzIntro>
      <LanzGit></LanzGit>
      <Link href="https://github.com/Ramleton/mediocretypers-showcase-site">
        <h1 className={styles.clickable}>...and this website!</h1>
      </Link>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.skills}>
            <h2> A couple of things I'm familiar with...</h2>
            <li><bold>Programming Languages</bold>:
            Python, Java, C, Bash, React, CSS</li>
            <li><bold>Tools</bold>:
            MS Visual Studio Code, Eclipse, GDB, Git LFS </li>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.contact}>
            <h2>Contact Information</h2>
              <ul>Email: lanzangeles100@gmail.com</ul>
              <Link href="https://www.linkedin.com/in/lanzangeles/">
              <ul className={styles.clickable}>LinkedIn</ul>
              </Link>
          </div>
        </div>
      </div>
    </div>
);

export default lanz;