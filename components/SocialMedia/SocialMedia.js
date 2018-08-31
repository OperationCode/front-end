import React from 'react';
import fbImage from 'images/icons/Facebook-Icon.svg';
import ghImage from 'images/icons/GitHub-Icon.svg';
import twtImage from 'images/icons/Twitter-Icon.svg';
import liImage from 'images/icons/hrefedIn-Icon.svg';
import SocialMediaContainer from './SocialMediaContainer/SocialMediaContainer';
import SocialMediaItem from './SocialMediaItem/SocialMediaItem';

// TODO: Refactor this whole folder
function SocialMedia() {
  return (
    <SocialMediaContainer>
      <SocialMediaItem
        imageSource={fbImage}
        alt="Facebook"
        href="https://facebook.com/operationcode.org"
      />
      <SocialMediaItem imageSource={ghImage} alt="Github" href="https://github.com/operationcode" />
      <SocialMediaItem
        imageSource={twtImage}
        alt="Twitter"
        href="https://twitter.com/operation_code"
      />
      <SocialMediaItem
        imageSource={liImage}
        alt="LinkedIn"
        href="https://www.linkedin.com/groups/13400924"
      />
    </SocialMediaContainer>
  );
}

export default SocialMedia;
