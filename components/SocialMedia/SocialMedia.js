import React from 'react';
import FacebookLogo from 'static/images/icons/facebook_logo.svg';
import GitHubLogo from 'static/images/icons/github_logo.svg';
import TwitterLogo from 'static/images/icons/twitter_logo.svg';
import LinkedInLogo from 'static/images/icons/linkedin_logo.svg';
import PinterestLogo from 'static/images/icons/pinterest_logo.svg';
import SocialMediaContainer from './SocialMediaContainer/SocialMediaContainer';
import SocialMediaItem from './SocialMediaItem/SocialMediaItem';
import styles from './SocialMedia.css';

function SocialMedia() {
  return (
    <SocialMediaContainer>
      <SocialMediaItem
        svg={<FacebookLogo className={styles.logo} />}
        alt="Facebook"
        href="https://facebook.com/operationcode.org"
      />
      <SocialMediaItem
        svg={<GitHubLogo className={styles.logo} />}
        alt="GitHub"
        href="https://github.com/operationcode"
      />
      <SocialMediaItem
        svg={<TwitterLogo className={styles.logo} />}
        alt="Twitter"
        href="https://twitter.com/operation_code"
      />
      <SocialMediaItem
        svg={<LinkedInLogo className={styles.logo} />}
        alt="LinkedIn"
        href="https://www.linkedin.com/groups/13400924"
      />
      <SocialMediaItem
        svg={<PinterestLogo className={styles.logo} />}
        alt="Pinterest"
        href="https://www.pinterest.com/operationcode/"
      />
    </SocialMediaContainer>
  );
}

export default SocialMedia;
