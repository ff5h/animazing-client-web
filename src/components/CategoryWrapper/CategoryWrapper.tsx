import React from 'react';
import VideoCategorySlider from '../VideoCategorySlider/VideoCategorySlider';

import styles from './CategoryWrapper.module.scss';

type CategoryWrapperProps = {};

const CategoryWrapper = ({}: CategoryWrapperProps): JSX.Element => {
  return (
    <div className={styles.CategoryWrapper}>
      <VideoCategorySlider />
      <VideoCategorySlider />
      <VideoCategorySlider />
    </div>
  );
};

export default CategoryWrapper;
