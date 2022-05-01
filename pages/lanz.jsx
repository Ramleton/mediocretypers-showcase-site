import React from 'react';
import LanzIntro from './lanzintro';
import LanzSkills from './lanzskills';
import LanzGit from './lanzgit';
import LanzContact from './lanzcontact';
import styles from "../styles/Lanz.module.css";

const lanz = () => (
    <div className={styles.lanz}>
      <LanzIntro></LanzIntro>
      <LanzGit></LanzGit>
      <div className={styles.skills_contacts_row}>
      <LanzSkills></LanzSkills>
      <LanzContact></LanzContact>
      </div>
    </div>
);

export default lanz;