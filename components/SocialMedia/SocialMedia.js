import React from 'react';
import fbImage from 'images/icons/Facebook-Icon.svg';
import ghImage from 'images/icons/GitHub-Icon.svg';
import twtImage from 'images/icons/Twitter-Icon.svg';
import liImage from 'images/icons/LinkedIn-Icon.svg';
import SocialMediaContainer from './SocialMediaContainer/SocialMediaContainer';
import SocialMediaItem from './SocialMediaItem/SocialMediaItem';

const SocialMedia = () => (
  <SocialMediaContainer>
    <SocialMediaItem
      smImage={fbImage}
      smText="Facebook"
      link="https://facebook.com/operationcode.org"
    />
    <SocialMediaItem
      smImage={ghImage}
      smText="Github"
      link="https://github.com/operationcode"
    />
    <SocialMediaItem
      smImage={twtImage}
      smText="Twitter"
      link="https://twitter.com/operation_code"
    />
    <SocialMediaItem
      smImage={liImage}
      smText="LinkedIn"
      link="https://www.linkedin.com/groups/13400924"
    />
  </SocialMediaContainer>
);

export default SocialMedia;
