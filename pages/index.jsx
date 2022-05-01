import React from 'react';

import AboutLanz from './aboutlanz';
import AboutIshaan from './aboutIshaan';
import styles from '../styles/Home.module.css';

// import Head from 'next/head';
// import Image from 'next/image';

const main = () => (
  <div className={styles.home}>
    <AboutIshaan></AboutIshaan>
    <AboutLanz></AboutLanz>
  </div>
);

export default main;
