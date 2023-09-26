import React from 'react';
import styles from './Rank.module.css';

function Rank({ name, entries }) {
  return (
    <div>
      <div className={`${styles.mainTitle} white f3`}>
        {name}, your current entry count is...
      </div>
      <div className="white f1">#{entries}</div>
    </div>
  );
}

export default Rank;
