import React from 'react';
import FacebookLogo from 'static/images/icons/facebook_logo.svg';
<<<<<<< HEAD
import GitHubLogo from 'static/images/icons/github_logo.svg';
import TwitterLogo from 'static/images/icons/twitter_logo.svg';
import LinkedInLogo from 'static/images/icons/linkedin_logo.svg';
import PinterestLogo from 'static/images/icons/pinterest_logo.svg';
=======
import TwitterLogo from 'static/images/icons/twitter_logo.svg';
import InstagramLogo from 'static/images/icons/instagram_logo.svg';
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
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
<<<<<<< HEAD
        href="https://github.com/operationcode"
        name="GitHub"
        svg={<GitHubLogo className={styles.logo} />}
      />
      <SocialMediaItem
=======
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
        href="https://twitter.com/operation_code"
        name="Twitter"
        svg={<TwitterLogo className={styles.logo} />}
      />
      <SocialMediaItem
<<<<<<< HEAD
        href="https://www.linkedin.com/groups/13400924"
        name="LinkedIn"
        svg={<LinkedInLogo className={styles.logo} />}
      />
      <SocialMediaItem
        href="https://www.pinterest.com/operationcode/"
        name="Pinterest"
        svg={<PinterestLogo className={styles.logo} />}
=======
        href="https://www.instagram.com/operation_code/"
        name="Instagram"
        svg={<InstagramLogo className={styles.logo} />}
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      />
    </SocialMediaContainer>
  );
}

export default SocialMedia;
