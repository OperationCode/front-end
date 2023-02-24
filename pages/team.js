import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import { s3 } from 'common/constants/urls';
import Content from 'components/Content/Content';
import FlatCard from 'components/Cards/FlatCard/FlatCard';
import styles from 'styles/team.module.css';

const boardMembers = [
  {
    name: 'Cynthia Kao',
    role: 'Executive Director',
    description: `Cynthia S. Kao started her career as a Licensed Clinical Social Worker specializing in ABA, speech, trauma and addictions therapy for the non-profit sector during her time as an active duty military spouse and as a U.S. Air Force Reservist. During her time in service, she was a combat journalist and provided support to various USAF Public Affairs Offices with public relations, graphic design, events support, press, web, digital and communications expertise. After deploying twice, and exiting the service in early 2014, Cynthia made the transition to civilian life as a Director and Producer for the TV and Film industry before moving into UI/UX design, software development and becoming a founder. She is a mother of three grown children (one who is a service-disabled Army Veteran), and is passionate about advocating for and serving the military, Veteran and military spouse community. She currently lives in the Northern Virginia area.`,
    imageSrc: 'https://operation-code-assets.s3.us-east-2.amazonaws.com/headshots/cynthia.jpg',
  },
  {
    name: 'Kelly MacLeod',
    role: 'Board Director, Secretary',
    description: `Kelly MacLeod is a veteran of the North Carolina Army National Guard, with a tour in Iraq and Afghanistan. As a self-taught coder, she is also a veteran and survivor of a career change. Helping veterans has always been a career goal; Kelly now advocates for veterans and milspouses who want to transition to a tech-related career. Her current position as a software project manager has absolutely nothing to do with this, but she leverages it to talk about vets every chance she gets. Kelly has yet to break the Operation Code website.`,
    imageSrc: 'https://operation-code-assets.s3.us-east-2.amazonaws.com/headshots/kelly.jpg',
  },
  {
    name: 'David Reis',
    role: 'Board Treasurer',
    description: `David brings to the table more than 30 years of nonprofit and business leadership experience in both international and national organizations, most recently as VP of Development and Ideas Beyond Borders and as CDO at Iraq and Afghanistan Veterans of America. He is also CEO of the nonprofit capacity building consulting firm Forward Motion Strategies.`,
    imageSrc: 'https://operation-code-assets.s3.us-east-2.amazonaws.com/headshots/david_reis.jpg',
  },
  {
    name: 'Ali Taylor-Cipolla',
    role: 'Board Vice-Chair',
    description: `Ali Taylor-Cipolla is a compliance specialist by day, activist by night who works with Microsoft and Operation Code, respectively. After spending more than 8 years in the restaurant management field, where it was relatively easy to find work as a constantly moving military spouse, Ali understands the challenges faced by military families, having faced them firsthand. After her partner’s retirement from the United States Air Force, she moved to the Seattle area and completed Microsoft’s Military Spouse Technology Academy. This was where she discovered that she did not want to develop software for a living. However, her love for the technology sector and the people in it brought her to her present role with Global Talent Acquisition at Microsoft. Ali aspires to empower, connect and engage with military families and veterans, helping them achieve stability and realization of their professional goals. She is a current member of the Washington State Military Transition Council where she advocates for the interests of military spouses in her new home state. She lives with her partner and two pet pythons, and when she’s not professionally finding solutions to large problems, she enjoys gardening, PC gaming, and her circus arts practice.`,
    imageSrc: 'https://operation-code-assets.s3.us-east-2.amazonaws.com/headshots/ali.jpg',
  },
  {
    name: 'Sean Cameron',
    role: 'Board Chair',
    description: `Sean is a US Navy veteran from Northern California. Originally specializing in electronics, he later crossed into various disciplines including network engineering, information security, and product management. Currently he serves in a client facing role at a small consulting firm in Southern California. Sean started with OC building the San Diego Chapter. Outside of daily routine, Sean is an organizer for a regional data science interest group. His interests include reading, long walks, and the study of language (Rust, R, Python, French, and Spanish, in no particular order).`,
  },
];

export default function Team() {
  return (
    <div className={styles.Team}>
      <Head title="Team" />

      <HeroBanner
        title="The Team"
        backgroundImageSource={`${s3}oc_crew_nyc_2021.jpg`}
        className={styles.hero}
      />

      <Content
        title="Our Board"
        hasTitleUnderline
        theme="white"
        columns={[
          <div className={styles.teamMembers}>
            {boardMembers.map(({ name, role, imageSrc: imageSource, description }) => (
              <FlatCard
                key={name}
                header={
                  <>
                    <h3>{name}</h3>
                    <br />
                    <h5>{role}</h5>
                  </>
                }
                image={{
                  source: imageSource,
                  alt: `Headshot of ${name}`,
                }}
              >
                {description}
              </FlatCard>
            ))}
          </div>,
          <div className={styles.foundingMembers}>
            <p>
              Operation Code deeply appreciates the time, energy, and hard work of our{' '}
              <b>Founding Board Members</b>, including Conrad Hollomon (Executive Director), Nell
              Shamrell-Harrington (Board Director), Mark Kerr (Chair), Laura Gomez (Vice Chair), Dr.
              Tyrone Grandison (Vice Chair), Dr. Stacy Chin (Director of Fundraising Committee),
              Liza Rodewald (Director of Military Families Committee), Pete Runyon (Secretary/
              Treasurer), Josh Carter, Nick Frost, and Aimee Knight on their support, dedication and
              commitment in the early days.
            </p>

            <p className={styles.textAlignCenter}>
              <em>Thank you for setting us up for success!</em>
            </p>
          </div>,
        ]}
      />
    </div>
  );
}
