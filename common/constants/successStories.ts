import { s3 } from 'common/constants/urls';

interface SuccessStory {
  title: string;
  quote: string;
  imageSource: string;
}

const successStories: SuccessStory[] = [
  {
    title: 'Ali Cipolla-Taylor, Talent Acquisition at Microsoft',
    quote:
      'I finished MSTA the last week of February, and then COVID hit. Employment was not going to happen…to anyone. I kept making calls, working on my skills, and throwing myself out there, and I got a role as a vendor at Microsoft. I’m half of the Data Privacy, Compliance, and Controls team for Talent Acquisition now. I had a lot of hard conversations with myself. I learned to lean into a support network, locally and online, through OpCode. I’m notoriously shy on the internet, but I knew that I couldn’t do this alone. Change happens when the discomfort of making the change is less than the life you’re living.',
    imageSource: `${s3}headshots/ali.jpg`,
  },
  {
    title: 'Princeton Baker, Enterprise Security Analyst',
    quote:
      'I am a Navy vet. I started at the US Navy Ceremonial Guard then to Norfolk to work on ship weapon systems to Miami then San Diego as a Corpsman. I struggled mentally when I first got out. I really had to dig deep and find who I am not what I think I am. I am not just a veteran or software developer or the annoying security guy. I think many veterans are looking for a title and a clear path. I found out quickly on this side of civilization you have to make your own path. I did a 16-week full time coding boot camp while full time in school with a wife and two young boys during quarantine. Right now I am an Enterprise Security Analyst for a payment company and I love it. It is my first role in tech.',
    imageSource: `${s3}headshots/princeton.jpg`,
  },
  {
    title: 'Jose Camilo, Full-Stack Developer',
    quote:
      'I joined the Army in 2014 as an active duty Calvary Scout. In 2017, I left active duty to continue college and joined the Army Reserves as a Human Resources Specialist. Still serving in the Reserves now. I doubted myself a lot, wondering the type of role I should focus on, the type of tech/ tools I should learn. Starting courses that I would not finish, and starting projects that I would not finish. It sounds like I been training for 2 years to get to this point, but in reality, there were many occasions in which I did not code for weeks due to being overwhelmed and option paralysis. This was also around the time I discovered Operation Code. I am now a Full Stack Developer at UBS.',
    imageSource: `${s3}headshots/jose.jpg`,
  },
];

export default successStories;
