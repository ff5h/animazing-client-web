import React from 'react';
import VideoCard from '../VideoCard/VideoCard';

import styles from './VideoCategorySlider.module.scss';

type VideoCategorySliderProps = {};

const VideoCategorySlider = ({}: VideoCategorySliderProps): JSX.Element => {
  return (
    <div className={styles.VideoCategorySlider}>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
};

export default VideoCategorySlider;
