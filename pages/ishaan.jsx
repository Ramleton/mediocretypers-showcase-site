import { useRouter } from 'next/router'; /* hook: resusable piece of code allowing us to have diff functionalities */
import React from 'react';

import Button from "../components/Button";
import styles from "../styles/IshaanPage.module.css";

const Ishaan = () => {
    return <div className={styles.page}>
            <h1 className={styles.centered_text}>Welcome to my page!</h1>
            <p></p>
            <h2 className={styles.centered_text}>I happen to have some experience with...</h2>
            <div className={styles.experience_grid}>
                <div className={styles.grid_one}>Python</div>
                <div className={styles.grid_two}>JavaScript</div>
                <div className={styles.grid_three}>HTML</div>
                <div className={styles.grid_four}>CSS</div>
                <div className={styles.grid_five}>Java</div>
                <div className={styles.grid_six}>TypeScript</div>
                <div className={styles.grid_seven}>React</div>
                <div className={styles.grid_eight}>Data Structures</div>
            </div>
            <h2 className={styles.centered_text}>Some projects that maybe you should check out</h2>
            <div className={styles.projects}>
                <div className={styles.project}>
                    <h3>Guardian Tales Team Builder</h3>
                </div>    
                <div className={styles.project}>
                    <h3>Three Musketeers (with some extra features)</h3>
                </div>    
                <div className={styles.project}>
                    <h3>And this personal website</h3>
                </div>    
            </div>
            <h4>Contact</h4>
            <ul>
                <li>Github
                    <GithubButton path="https://github.com/Ramleton" avatar="https://avatars.githubusercontent.com/u/77259553?v=4"></GithubButton>
                </li>
                <li>Email: ishaan.saini@student.utoronto.ca</li>
            </ul>
        </div>;
};

export default Ishaan;