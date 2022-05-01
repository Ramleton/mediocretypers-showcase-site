import styles from "../styles/AboutLanz.module.css";

const AboutLanz = () => {
    return <div className={styles.aboutlanz}>
        <div className={styles.text}>
            <h1>Lanz</h1>
            <p>
                Hi, I'm a 2nd year computer science student at UTM.<br />
                If you want to learn more about me, click on my name at the navbar!
            </p>
            <p>Here's my handsome face!</p>
            <img className={styles.portrait} src="https://i.imgur.com/sJtBGJL.png"></img>
        </div>
    </div>;
}

export default AboutLanz;