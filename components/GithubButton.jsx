import { useRouter } from 'next/router'; /* hook: resusable piece of code allowing us to have diff functionalities */
import React from 'react';

import styles from '../styles/Button.module.css';

const GithubButton = ({ children = "click me", avatar_path, path}) => {
    const router = useRouter();
    return <button className={styles.githubbutton} onClick={() => router.push(path)}>
        <img className={styles.githubavatar} src={avatar}></img>
    </button>;
};

export default GithubButton; 