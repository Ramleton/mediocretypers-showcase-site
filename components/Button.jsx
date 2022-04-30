/*
Props: Properties, things that your function will accept as a parameter
that you can put in your code. basically attributes?

children: attribute that is anything b/w a tag

props = {path, children}. later avoids having to do proper.(something) everytime

*/

import React from 'react';
import { useRouter } from 'next/router'; /* hook: resusable piece of code allowing us to have diff functionalities */
import styles from '../styles/Button.module.css';

// eslint-disable-next-line react/prop-types
const Button = ({ children = 'click me', path }) => {
  const router = useRouter(); /* allows us to change pages */
  return (
    <button type="button" className={styles.customButton} onClick={() => router.push(path)}>
      {children}
    </button>
  );
};

export default Button;
