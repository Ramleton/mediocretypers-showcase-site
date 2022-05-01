import React from 'react';
import Link from "next/link";
import GithubButton from '../components/GithubButton';
import Project from '../components/Project';
import styles from "../styles/Lanzgit.module.css";

const lanzgit = () => (
    <div className={styles.lanzgit}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div>
              <div className={styles.pic_pos}>
              <GithubButton path="https://github.com/Bodyshots" avatar_path="https://avatars.githubusercontent.com/u/67764300?v=4" avatar_style={
                  styles.githubavatar}>
              </GithubButton>
              </div>
            <div>
              <div className={styles.proj_pic1}>
                <Project project_name="(Not) Super Seducer: The Bootleg Version" project_img_src="https://i.imgur.com/D03IXlf.png"
                         project_desc={"An instance of the game where we're dating a randomly-generated person named \"Elsie.\"\
                                        Based on past questions, we choose option A and gain \"confidence\" for predicting the best option\
                                        that aligns with our date's personality."} project_styles={styles}>
                </Project>
              </div>
              <div className={styles.proj_pic2}>
                <Project project_name="Mass Folder Creator" project_img_src="https://i.imgur.com/Mr8Acil.png"
                         project_desc={"An example use case. In a folder that has additional three folders, named \"Week 1,\" \"Week 2,\" and \"Week 3,\"\
                                        we try to create 5 \"Week\" folders. As a result, the program fails to create Week folders 1-3, but succeeds in\
                                        creating Week folders 4-5."} project_styles={
                         styles}>
                </Project>
               </div>
            </div>
        </div>
    </div>
        <div className={styles.column}>
          <h2>
            <div className={styles.gitclick}>
              <Link href="https://github.com/Bodyshots">
                <a>Github</a>
              </Link>
            </div>
          </h2>
          <p className={styles.proj_text}>Here's where you can find all of my projects. Currently, I have three (non-school related) projects.
           Click any of them to go to their respective source code pages:</p>
            <h2>
              <div className={styles.seduceclick}>
                <Link href="https://github.com/Bodyshots/seducer-bootleg">
                 <a>(Not) Super Seducer: The Bootleg Version (Python)</a>
               </Link>
             </div>
           </h2>
          <p className={styles.proj_text}>A single-player dating game in which the player has to endure a series of questions.
          Depending on your date's personality and how you respond to a question, you may gain or lose confidence
          in yourself. Go down to 0% confidence and it's game over.
          <br />
          <br />
          This features:</p><br />
                         <li>Multiple 8-bit/16-bit songs! </li>
                         <li>4 different personalities to date!</li>
                         <li>50+ dating questions!</li>
                         <li>3 Difficulty levels to choose from!</li>
          <br />
          <p className={styles.proj_text}>Play the game to try and find out if you can endure the ruthless questioning from your
          date!</p>
          <br />
          <h2>
            <div className={styles.creatorclick}>
              <Link href="https://github.com/Bodyshots/MassFolderCreator">
                <a>Mass File Creator (Java)</a>
              </Link>
            </div>
          </h2>
          <p className={styles.proj_text}>A simple program that allows you to create multiple folders at once,
          wherever you are.
          <br />
          <br />
          This includes:</p><br />
                         <li>Creating the same folder in multiple directories</li>
                         <li>Creating at some valid path (including where the program is run)</li>
          <br />
          <p className={styles.proj_text}>The program also has a "Create Week folders" option, which is great tool for preparing for the
          next semester. Just input your year, course code, and number of weeks.
          <br />
          <br />
          Thereafter, the program will create:</p><br />
                                              <li>A year folder</li>
                                              <li>A course folder, inside the year folder</li>
                                              <li>X week folders inside your course folder</li>
          <br />
        </div>
      </div>
    </div>
);

export default lanzgit;