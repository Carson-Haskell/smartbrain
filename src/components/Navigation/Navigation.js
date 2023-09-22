import React from 'react';
import styles from './Navigation.module.css';

function Navigation({ onRouteChange, signedIn }) {
  return (
    <nav className={styles.navigation}>
      {signedIn && (
        <button
          className={`${styles.userBtn} shadow-2 grow`}
          onClick={() => onRouteChange('signout')}
        >
          Sign out
        </button>
      )}
    </nav>
  );
}

export default Navigation;
