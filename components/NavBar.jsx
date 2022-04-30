// import React from 'react';

import Link from 'next/link'

// eslint-disable-next-line no-unused-vars
const NavBar = () => {
    return <nav>
        <Link href="/">Home</Link>
        <Link href="/ishaan">Ishaan's Page</Link>
        <Link href="/lanz">Lanz's Page</Link>
    </nav>;
};

export default NavBar;
