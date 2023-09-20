import React from 'react';
import styles from './Rank.module.css';

function Rank() {
  return (
    <div>
      <div className={`${styles.mainTitle} white f3`}>
        Carson, your current rank is...
      </div>
      <div className="white f1">#5</div>
    </div>
  );
}

export default Rank;
