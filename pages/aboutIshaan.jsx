import styles from "../styles/AboutIshaan.module.css";

const AboutIshaan = () => {
    return <div className={styles.aboutishaan}>
        <div className={styles.text}>
            <h1>Ishaan</h1>
            <p>
                Hi, I'm a 2nd year computer science student at UTM.<br />
                If you want to learn more about me, click on my name at the navbar!
            </p>
            <p>Here's a picture of me!</p>
            <img className={styles.portrait} src="https://i.imgur.com/cAQIqnm.jpg"></img>
        </div>
    </div>;
}

export default AboutIshaan;