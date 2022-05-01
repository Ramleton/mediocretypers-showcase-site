
import React from 'react';
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

// eslint-disable-next-line no-unused-vars
const NavBar = () => {
    return (<nav className={styles.navbar}>
        <Link href="/">
            <a className={styles.logoLink}>epic personal website</a>
        </Link>
        <Link href="/ishaan">Ishaan's Page</Link>
        <Link href="/lanz">Lanz's Page</Link>
    </nav>
    );
};

export default NavBar;
