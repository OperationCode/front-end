/* eslint-disable max-len */
import { s3 } from 'common/constants/urls';

const successStories = [
  {
    title: 'Jon Deng, US Army, Software Engineer',
    quote:
      "Transitioning out the military into tech is a difficult process. You have to learn new skills and a new way of thinking. The part that doesn't change is that it's easier to be successful when you have a good team. Through Operation Code, I was able to access mentorship, attend technology conferences, and found a support network that helped me find my first software engineering job.",
    imageSource: `${s3}headshots/jon_deng.jpg`,
  },
  {
    title: 'Jameel Matin, USMC, Software Engineer',
    quote:
      'Operation Code has helped me navigate my tech career from choosing the right code school to solving complex software problems. They helped bring me out of homelessness and into a six-figure salary as a full stack engineer for a venture capital firm.',
    imageSource: `${s3}headshots/jameel_matin.jpg`,
  },
  {
    title: 'Sean McBride, US Army, Software Engineer',
    quote:
      'If you had told me when I separated from the military that I would eventually be the lead developer on a pretty complex piece of software, I would have told you that you were nuts. However, several years and pivots later here I am. While it was a hard slog to get here, I chalk up much of my success as due to Operation Code.',
    imageSource: `${s3}headshots/sean_mcbride.jpg`,
  },
];

export default successStories;
