import React from 'react';
import LanzIntro from './lanzintro';
import LanzGit from './lanzgit';
import Link from "next/link";
import styles from "../styles/Lanz.module.css";

const lanz = () => (
    <div className={styles.lanz}>
      <LanzIntro></LanzIntro>
      <LanzGit></LanzGit>
      <div className={styles.row}>
        <div className={styles.websiteclick}>
          <h1>
            <div className={styles.websiteclick}>
              <Link href="https://github.com/Ramleton/mediocretypers-showcase-site">
                <a>...and this website!</a>
              </Link>
            </div>
          </h1>
        </div>
      </div>
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
                <ul>
                  <div className={styles.linkedinclick}>
                    <Link href="https://www.linkedin.com/in/lanzangeles/">  
                      <a>LinkedIn</a>
                    </Link>
                  </div>
                </ul>
          </div>
        </div>
      </div>
    </div>
);

export default lanz;