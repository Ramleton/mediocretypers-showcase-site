import React from 'react';
import Link from "next/link";
import GithubButton from '../components/GithubButton';
import Project from '../components/Project';
import styles from "../styles/Lanzgit.module.css";
import styles2 from "../styles/Lanzgitproj2.module.css"

const lanzgit = () => (
    <div className={styles.lanzgit}>
        <avatar_pos>
          <GithubButton path="https://github.com/Bodyshots" avatar_path="https://avatars.githubusercontent.com/u/67764300?v=4" avatar_style={styles.avatar}>
          </GithubButton>
        </avatar_pos>
        <Link href="https://github.com/Bodyshots">
            <a className={styles.title}> Github </a>
        </Link>
        <p> 
            Here's where you can find all of my projects. Currently, I have three (non-school related) projects.
            Click any of them to go to their respective source code pages:
        </p>
        <projects>
            <Link href="https://github.com/Bodyshots/seducer-bootleg">
                <h2 className={styles.title}>(Not) Super Seducer: The Bootleg Version (Python)</h2>
            </Link>
            <Project project_name="(Not) Super Seducer: The Bootleg Version" project_img_src="https://i.imgur.com/D03IXlf.png"
            project_desc={"Game in-action. Depending on your choices, you will either gain or lose \"confidence.\""} project_styles={styles}>
            </Project>
            <projecttext>
                A single-player dating game in which the player has to endure a series of questions. 
                Depending on your date's personality and how you respond to a question, you may gain or lose confidence
                in yourself. Go down to 0% confidence and it's game over.
                <br />
                <br />
                This features: <li>Multiple 8-bit/16-bit songs! </li>
                               <li>4 different personalities to date!</li>
                               <li>50+ dating questions!</li>
                               <li>3 Difficulty levels to choose from!</li>
                <br />
                <br />
            Play the game to try and find out if you can endure the ruthless questioning from your date!
            </projecttext>
            <br />
            <br />
            <Link href="https://github.com/Bodyshots/MassFolderCreator">
                <h2 className={styles.title}>Mass File Creator (Java)</h2>
            </Link>
            <Project project_name="Mass Folder Creator" project_img_src="https://i.imgur.com/Mr8Acil.png"
            project_desc={"An example use case. Here, we try to create 5 numbered folders named \"Week\"."} project_styles={styles2}>
            </Project>
            <projecttext>
                A simple program that allows you to create multiple folders at once,
                wherever you are. 
                <br />
                <br />
                This includes: <li>Creating the same folder in multiple directories</li>
                               <li>Creating at some valid path (including where the program is run)</li>
                <br />
                <br />
                The program also has a "Create Week folders" option, which is great tool in preparing for the 
                next semester. Just input your year, course code, and number of weeks. 
                <br />
                <br />
                Thereafter, the program will create: <li>A year folder</li>
                                                     <li>A course folder, inside the year folder</li>
                                                     <li>X week folders inside your course folder</li>
                <br />
                <br />
            </projecttext>
            <br />
            <br />
            <b>This website!</b>
        </projects>

    </div>
);

export default lanzgit;