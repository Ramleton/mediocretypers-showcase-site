import { useRouter } from 'next/router'; /* hook: resusable piece of code allowing us to have diff functionalities */
import React from 'react';

import styles from '../styles/Button.module.css';

const GithubButton = ({ children = "click me", avatar_path, path, avatar_style=styles.githubavatar}) => {
    const router = useRouter();
    return <button className={styles.githubbutton} onClick={() => router.push(path)}>
        <img className={avatar_style} src={avatar_path}></img>
    </button>;
};

export default GithubButton; 