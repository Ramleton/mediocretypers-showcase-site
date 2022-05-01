import React from 'react';
import Link from "next/link";
import styles from "../styles/Lanzcontact.module.css";

const lanzcontact = () => (
    <div className={styles.lanzcontact}>
        <h3>Contact Information</h3>
        <ul>Email: lanzangeles100@gmail.com
            <Link href="https://www.linkedin.com/in/lanzangeles/">
                <p>LinkedIn</p>
            </Link>
        </ul>
    </div>
);

export default lanzcontact;