import React from 'react';
import Tilt from 'react-parallax-tilt';

import brain from './logo.png';

import styles from './Logo.module.css';

function Logo() {
  return (
    <>
      <div className={`${styles.logoContainer} ma4 mt0`}>
        <Tilt
          className={`${styles.tiltBox} shadow-2`}
          glareEnable={false}
          perspective={800}
          tiltMaxAngleX={25}
          tiltMaxAngleY={25}
        >
          <img className={styles.logoImg} src={brain} alt="logo" />
        </Tilt>
      </div>
      <div className={styles.gap}></div>
    </>
  );
}

export default Logo;
