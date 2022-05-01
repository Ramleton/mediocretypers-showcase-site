import React from 'react';
import styles from "../styles/Lanzskills.module.css";

const lanzskills = () => (
    <div className={styles.lanzskills}>
        <skills>
            <h2> A couple of things I'm familiar with...</h2>
            <li>
                <bold>Programming Languages: </bold>
                    Python, Java, C, Bash, React, CSS</li>
            <li>
                <bold>Tools: </bold> 
                    MS Visual Studio Code, Eclipse, GDB, Git LFS </li>
        </skills>
    </div>
);

export default lanzskills;