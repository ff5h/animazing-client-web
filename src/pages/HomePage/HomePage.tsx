import React from 'react';

import Header from '~/components/Header/Header';
import CategoryWrapper from '~/components/CategoryWrapper/CategoryWrapper';
import Footer from '~/components/Footer/Footer';

import styles from './HomePage.module.scss';

type HomePageProps = {};

const HomePage = ({}: HomePageProps): JSX.Element => {
  return (
    <div className={styles.HomePage}>
      <Header />
      <CategoryWrapper />
      <Footer />
    </div>
  );
};

export default HomePage;
