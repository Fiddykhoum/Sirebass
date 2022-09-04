import React from 'react'
import styles from './RedSquare.module.css'

// Important: styles from './RedSquare.module.css' et className={styles.square}
// la class se nome square pour les deux cas (red et blue)
const RedSquare = () => {
  return <div className={styles.square} ></div>;
};

export default RedSquare;
