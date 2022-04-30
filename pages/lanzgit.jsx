import React from 'react';
import Link from "next/link";
import styles from "../styles/Lanzgit.module.css";

const lanzgit = () => (
    <div className={styles.lanzgit}>
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
            <projecttext> flavour tesxt</projecttext>
            <Link href="https://github.com/Bodyshots/MassFolderCreator">
                <h2>Mass File Creator</h2>
            </Link>
            <projecttext>iukhsfgdsfgdiklujhgfds</projecttext>
            <h2>This website!</h2>
            <projecttext>dfguhsdlgjfjh</projecttext>
        </projects>

    </div>
);

export default lanzgit;