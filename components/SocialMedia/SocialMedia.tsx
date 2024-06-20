import FacebookLogo from '@/public/static/images/icons/facebook_logo.svg';
import TwitterLogo from '@/public/static/images/icons/twitter_logo.svg';
import GitHubLogo from '@/public/static/images/icons/github_logo_circle.svg';
import InstagramLogo from '@/public/static/images/icons/instagram_logo.svg';
import YouTubeLogo from '@/public/static/images/icons/youtube_logo.svg';
import LinkedInLogo from '@/public/static/images/icons/linkedin_logo_circle.svg';
import { SocialMediaContainer } from './SocialMediaContainer/SocialMediaContainer';
import { SocialMediaItem } from './SocialMediaItem/SocialMediaItem';

export function SocialMedia() {
  return (
    <SocialMediaContainer>
      <SocialMediaItem
        href="https://facebook.com/operationcode.org"
        name="Facebook"
        svg={<FacebookLogo className="fill-white w-6" />}
      />
      <SocialMediaItem
        href="https://twitter.com/operation_code"
        name="Twitter"
        svg={<TwitterLogo className="fill-white w-6" />}
      />
      <SocialMediaItem
        href="https://www.instagram.com/operation_code/"
        name="Instagram"
        svg={<InstagramLogo className="fill-white w-6" />}
      />
      <SocialMediaItem
        href="https://www.youtube.com/channel/UCAoJt4a_KEBmgXfoQUrNbSA"
        name="YouTube"
        svg={<YouTubeLogo className="fill-white w-6" />}
      />
      <SocialMediaItem
        href="https://www.linkedin.com/company/operationcode/"
        name="LinkedIn"
        svg={<LinkedInLogo className="fill-white w-6" />}
      />
      <SocialMediaItem
        href="https://github.com/OperationCode/"
        name="GitHub"
        svg={<GitHubLogo className="fill-white w-6" />}
      />
    </SocialMediaContainer>
  );
}
