import React from 'react';

import styles from './Footer.module.scss';

import Facebook from '~/assets/images/facebook.png';
import Instagram from '~/assets/images/instagram.png';
import Twitter from '~/assets/images/twitter.png';
import YouTube from '~/assets/images/youtube.png';

type FooterProps = {};

const Footer = ({}: FooterProps): JSX.Element => {
  return (
    <div className={styles.Footer}>
      <div className={styles.SocialMedia}>
        <img src={Facebook} alt='Facebook' />
        <img src={Instagram} alt='Instagram' />
        <img src={Twitter} alt='Twitter' />
        <img src={YouTube} alt='YouTube' />
      </div>
      <div className={styles.Links}>
        <div className={styles.TextColumn}>
          <div className={styles.Text}>Audio Description</div>
          <div className={styles.Text}>Investor Relations</div>
          <div className={styles.Text}>Legal Noticed</div>
        </div>
        <div className={styles.TextColumn}>
          <div className={styles.Text}>Help Center</div>
          <div className={styles.Text}>Jobs</div>
          <div className={styles.Text}>Cookie Preferences</div>
        </div>
        <div className={styles.TextColumn}>
          <div className={styles.Text}>Gift Cards</div>
          <div className={styles.Text}>Terms of Use</div>
          <div className={styles.Text}>Corporate Information</div>
        </div>
        <div className={styles.TextColumn}>
          <div className={styles.Text}>Media Center</div>
          <div className={styles.Text}>Privacy</div>
          <div className={styles.Text}>Contact Us</div>
        </div>
      </div>
      <div className={styles.Button}>Service Code</div>
      <div className={styles.Copyright}>© 1997-2023 Netflix, Inc.</div>
    </div>
  );
};

export default Footer;
