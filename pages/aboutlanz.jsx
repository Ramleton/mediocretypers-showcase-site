import styles from "../styles/AboutLanz.module.css";

const AboutLanz = () => {
    return <div className={styles.aboutlanz}>
        <div className={styles.text}>
            <h1>Lanz</h1>
            <p>
                Hi, I'm a 2nd year Computer Science and Sociology at UTM.<br/>
                Click on my name on the navigation bar above to know more!
            </p>
            <p>Here's my handsome face, by the way!</p>
            <img className={styles.portrait} src="https://i.imgur.com/Qu63YAy.jpg"></img>
        </div>
    </div>;
}

export default AboutLanz;