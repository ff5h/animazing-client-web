import React from 'react';
import CategoryWrapper from '~/components/CategoryWrapper/CategoryWrapper';

import styles from './HomePage.module.scss';

type HomePageProps = {};

const HomePage = ({}: HomePageProps): JSX.Element => {
  return (
    <div className={styles.HomePage}>
      <CategoryWrapper />
    </div>
  );
};

export default HomePage;
