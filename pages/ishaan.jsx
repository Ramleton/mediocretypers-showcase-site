import React from 'react';

import GithubButton from '../components/GithubButton';
import Project from '../components/Project';
import styles from "../styles/IshaanPage.module.css";

const Ishaan = () => {
    return <div className={styles.page}>
            <h1 className={styles.centered_text}>Welcome to my page!</h1>
            <p></p>
            <h2 className={styles.centered_text}>I happen to have some experience with...</h2>
            <div className={styles.experience_row}>
                <div>Python</div>
                <div>JavaScript</div>
                <div>HTML</div>
                <div>CSS</div>
            </div>
            <div className={styles.experience_row}>
                <div>Java</div>
                <div>TypeScript</div>
                <div>React</div>
                <div>Data Structures</div>
            </div>
            <div className={styles.experience_row}>
                <div>C</div>
                <div>C#</div>
            </div>
            <h2 className={styles.centered_text}>Some projects that maybe you should check out</h2>
            <div className={styles.projects}>
                <Project project_name="Guardian Tales Team Builder" project_img_src="https://i.imgur.com/aKhfiXE.png" project_desc={
                    "A website for building teams of characters from the mobile game Guardian Tales"}></Project>
                <Project project_name="This personal website" project_img_src="https://i.imgur.com/eR1n7CA.png" project_desc={
                    "A website for displaying mine and Lanz's work"
                }></Project>
                <Project project_name="Terminal only Connect Four" project_img_src="https://i.imgur.com/UMnOgDs.png" project_desc={
                    "A C# Terminal only game of Connect Four that allows you play versus another human, CPU, or watch two CPUs fight to the death"}
                ></Project>
            </div>
            <h3 className={styles.centered_text}>Contact Me!</h3>
            <div className={styles.contact}>
                <GithubButton path="https://github.com/Ramleton" avatar_path="https://avatars.githubusercontent.com/u/77259553?v=4"></GithubButton>
                Github<br />
                Email: ishaan.saini@student.utoronto.ca
            </div>
        </div>;
};

export default Ishaan;