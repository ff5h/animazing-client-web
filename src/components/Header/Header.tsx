import React from 'react';

import styles from './Header.module.scss';

import NetflixLogo from '~/assets/images/Logo.svg';
import Search from '~/assets/icons/Search.svg';
import NotificationBell from '~/assets/icons/NotificationBell.svg';
import Avatar from '~/assets/images/ProfileIMG.png';
import DownArrow from '~/assets/icons/DownArrow.svg';

type HeaderProps = {};

const Header = ({}: HeaderProps): JSX.Element => {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderLeft}>
        <img src={NetflixLogo} alt='logo' />
        <div className={styles.NavBar}>
          <div className={styles.Item} style={{ fontWeight: 700 }}>
            Home
          </div>
          <div className={styles.Item}>TV Shows</div>
          <div className={styles.Item}>Movies</div>
          <div className={styles.Item}>New & Popular</div>
          <div className={styles.Item}>My List</div>
          <div className={styles.Item}>Browse by Languages</div>
        </div>
      </div>
      <div className={styles.HeaderRight}>
        <div className={styles.Item}>
          <img src={Search} alt='Search' />
        </div>
        <div className={styles.Item} style={{ fontWeight: 400 }}>
          Kids
        </div>
        <div className={styles.Item}>
          <img src={NotificationBell} alt='NotificationBell' />
        </div>
        <div className={styles.Account}>
          <img src={Avatar} alt='Avatar' />
          <img src={DownArrow} alt='DownArrow' />
        </div>
      </div>
    </div>
  );
};

export default Header;
