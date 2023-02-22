import React from 'react';

import styles from './Card.module.scss';

const Card = (): JSX.Element => {
  return (
    <div className={styles.flag}>
      <div style={{ width: 300, height: 300 }}></div>
      <div style={{ width: 300, height: 300 }}></div>
      <div style={{ width: 300, height: 300 }}></div>
      <div style={{ width: 300, height: 300 }}></div>
    </div>
  );
};

export default Card;
