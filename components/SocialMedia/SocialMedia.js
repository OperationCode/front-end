import React from 'react';
import FacebookLogo from 'static/images/icons/facebook_logo.svg';
import TwitterLogo from 'static/images/icons/twitter_logo.svg';
import GithubLogo from 'static/images/icons/github_logo.svg';
import InstagramLogo from 'static/images/icons/instagram_logo.svg';
import SocialMediaContainer from './SocialMediaContainer/SocialMediaContainer';
import SocialMediaItem from './SocialMediaItem/SocialMediaItem';
import styles from './SocialMedia.css';

function SocialMedia() {
  return (
    <SocialMediaContainer>
      <SocialMediaItem
        href="https://facebook.com/operationcode.org"
        name="Facebook"
        svg={<FacebookLogo className={styles.logo} />}
      />
      <SocialMediaItem
        href="https://twitter.com/operation_code"
        name="Twitter"
        svg={<TwitterLogo className={styles.logo} />}
      />
      <SocialMediaItem
        href="https://www.instagram.com/operation_code/"
        name="Instagram"
        svg={<InstagramLogo className={styles.logo} />}
      />
      <SocialMediaItem
        href="https://github.com/OperationCode/"
        name="GitHub"
        svg={<GithubLogo className={styles.logo} />}
      />
    </SocialMediaContainer>
  );
}

export default SocialMedia;
