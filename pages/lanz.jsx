import React from 'react';
import LanzIntro from './lanzintro';
import LanzSkills from './lanzskills';
import LanzGit from './lanzgit';
import Link from "next/link";
import LanzContact from './lanzcontact';
import styles from "../styles/Lanz.module.css";

const lanz = () => (
    <div className={styles.lanz}>
      <LanzIntro></LanzIntro>
      <LanzGit></LanzGit>
      <Link href="https://github.com/Ramleton/mediocretypers-showcase-site">
        <h1 className={styles.clickable}>..and this website!</h1>
      </Link>
      <div className={styles.skills_contacts_row}>
        <LanzSkills></LanzSkills>
        <LanzContact></LanzContact>
      </div>
    </div>
);

export default lanz;