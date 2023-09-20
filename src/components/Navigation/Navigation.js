import React from 'react';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      {/* <p className="f3 link dim black pa3 pointer white">Sign Out</p> */}
      <button className={`${styles.userBtn}`}>Sign out</button>
    </nav>
  );
}

export default Navigation;
