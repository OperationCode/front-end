import FacebookLogo from 'static/images/icons/facebook_logo.svg';
import GitHubLogo from 'static/images/icons/github_logo_circle.svg';
import InstagramLogo from 'static/images/icons/instagram_logo.svg';
import YouTubeLogo from 'static/images/icons/youtube_logo.svg';
import LinkedInLogo from 'static/images/icons/linkedin_logo_circle.svg';
import SocialMediaItem from './SocialMediaItem/SocialMediaItem';

function SocialMedia() {
  return (
    <div className="flex flex-row items-center justify-around [&_svg]:fill-white [&_svg]:text-white [&_svg]:size-6">
      <SocialMediaItem
        href="https://facebook.com/operationcode.org"
        name="Facebook"
        svg={<FacebookLogo />}
      />
      <SocialMediaItem
        href="https://www.instagram.com/operation_code/"
        name="Instagram"
        svg={<InstagramLogo />}
      />
      <SocialMediaItem
        href="https://www.youtube.com/channel/UCAoJt4a_KEBmgXfoQUrNbSA"
        name="YouTube"
        svg={<YouTubeLogo />}
      />
      <SocialMediaItem
        href="https://www.linkedin.com/company/operationcode/"
        name="LinkedIn"
        svg={<LinkedInLogo />}
      />
      <SocialMediaItem
        href="https://github.com/OperationCode/"
        name="GitHub"
        svg={<GitHubLogo />}
      />
    </div>
  );
}

export default SocialMedia;
