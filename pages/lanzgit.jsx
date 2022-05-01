import React from 'react';
import Link from "next/link";
import GithubButton from '../components/GithubButton';
import Project from '../components/Project';
import styles from "../styles/Lanzgit.module.css";

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
                <h2 className={styles.title}>(Not) Super Seducer: The Bootleg Version</h2>
            </Link>
            <p1img>
                <Project project_name="test1" project_img_src="https://i.imgur.com/D03IXlf.png" project_desc={"image text"} project_styles={styles.p1img}>
                </Project>
            </p1img>
            <projecttext> flavour tesxt</projecttext>
            <Link href="https://github.com/Bodyshots/MassFolderCreator">
                <h2 className={styles.title}>Mass File Creator</h2>
            </Link>
            <Project project_name="test2" project_img_src="https://i.imgur.com/D03IXlf.png" project_desc={"testing2"}>
            </Project>
            <projecttext>iukhsfgdsfgdiklujhgfds</projecttext>
            <h2>This website!</h2>
            <Project project_name="test3" project_img_src="https://i.imgur.com/D03IXlf.png" project_desc={"testing3"}>
            </Project>
            <projecttext>dfguhsdlgjfjh</projecttext>
        </projects>

    </div>
);

export default lanzgit;