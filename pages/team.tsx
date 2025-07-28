import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import { s3 } from 'common/constants/urls';
import Content from 'components/Content/Content';
import FlatCard from 'components/Cards/FlatCard/FlatCard';
import styles from 'styles/team.module.css';
import Button from 'components/Buttons/Button/Button';
import cynthiaHeadshot from 'public/static/images/cynthia.jpg';
import glomaniHeadshot from 'public/static/images/glomani.jpg';

const boardMembers = [
  {
    name: 'Cynthia Kao',
    role: 'Executive Director',
    description: `Cynthia S. Kao started her career as a Licensed Clinical Social Worker specializing in ABA, speech, trauma and addictions therapy for the non-profit sector during her time as an active duty military spouse and as a U.S. Air Force Reservist. During her time in service, she was a combat journalist and provided support to various USAF Public Affairs Offices with public relations, graphic design, events support, press, web, digital and communications expertise. After deploying twice, and exiting the service in early 2014, Cynthia made the transition to civilian life as a Director and Producer for the TV and Film industry before moving into UI/UX design, software development and becoming a founder. She is a mother of three grown children (one who is a service-disabled Army Veteran), and is passionate about advocating for and serving the military, Veteran and military spouse community. She currently lives in the Northern Virginia area.`,
    imageSrc: cynthiaHeadshot.src,
  },
  {
    name: 'Glomani Bravo-López',
    role: 'Director',
    description: `Glomani Bravo-López is a Puerto Rican thought leader, innovator, and Marine Corps combat Veteran driven by a lifelong commitment to service, impact, and purpose. Born and raised in Brooklyn, New York (with formative years spent in Puerto Rico), Glomani served honorably in the U.S. Marine Corps infantry from 2005 to 2009 with the 3rd Battalion, 2nd Marines (3/2) Lima Company, completing two combat deployments to Iraq.

    Following his military service, Glomani pursued studies in construction management and earned a degree in Business Administration with a concentration in finance and investments from Brooklyn College (CUNY). His civilian career spans construction, real estate, nonprofits, and government, including nearly a decade as Deputy Chief of Staff to a NYC Council Member and Senior Advisor to the Brooklyn District Attorney. He also served as Policy & Political Director for a New York City Mayoral campaign.

    Today, through founding Hyena Enterprises Global, he is building a next-generation approach to workforce resilience—developing purpose-aligned, AI-informed talent pipelines to support the future of advanced manufacturing and national defense. Glomani joins Operation Code to focus on Public Relations and improve our communications function.`,
    imageSrc: glomaniHeadshot.src,
  },
  {
    name: 'David Reis',
    role: 'Board Fundraising Director',
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
    name: 'Alex P. Wu',
    role: 'Treasurer',
    description: `Alex is a Marine Corps Veteran and currently works at Twilio as Counsel, Law Enforcement and National Security.

    He was previously a litigation associate at the law firm Cooley LLP and a vetting attorney on the Biden-Harris Transition Team. Before becoming an attorney, Alex served as a Marine combat engineer platoon commander in Helmand Province, Afghanistan, and then as a reserve tank platoon commander, executive officer, and company commander in the States. While a reservist, he worked in Washington, DC for an AAPI-advocacy non-profit and then as a staffer in the White House Office of Management and Administration and the White House Counsel's Office.

    Alex earned his J.D. from Stanford Law School, B.A. in Sociology from the College of William and Mary, and currently lives in the San Francisco Bay Area with his wife and their two bulldogs. He is originally from the D.C. area and is a long-suffering Washington Wizards fan.`,
    imageSrc: 'https://operation-code-assets.s3.us-east-2.amazonaws.com/headshots/alex_wu.jpg',
  },
  {
    name: 'Martin Espinosa',
    description: `Martin has been Technology Executive for over 25 years and is currently the VP of Internal Audit and Chief Audit Executive (CAE) at Juniper Networks. He has deep experience in finance, risk, compliance, governance, technology and process improvement with experience in security, software, hardware, semi-conductor, gaming and banking sectors with global multi-billion dollar companies. Prior to joining Juniper, Martin has been Chief Audit Executive (CAE) at multiple technology companies such as Symantec, Polycom, Electronic Arts and Avago (now Broadcom). He has also worked in finance operations prior to his internal audit roles and served as Chief Compliance Officer for Polycom. Other companies he has worked for include Sun Microsystems and Yahoo!! He is a firm believer of mentoring, giving back to the community and working with others to grow. He is a proud father of two and believes without work life balance you have no balance. He earned his BA in Economics from the University of Dallas and his MBA from the University of Colorado.`,
    imageSrc:
      'https://operation-code-assets.s3.us-east-2.amazonaws.com/headshots/martin_espinosa.jpg',
  },
  {
    name: 'Mike Roberts',
    description: `Mike Roberts is a software engineer by trade with over three decades of experience programming. He is the founder and CEO of Creating Coding Careers, which helps underrepresented people break into tech and helps companies build high-performance engineering teams out of historically excluded tech talent. Having launched hundreds of new collar careers, he has grads working at IBM/RedHat, Apple, WalmartLabs, Sony, AWS, Facebook, Deloitte, Trust&Will, BD, NewRocket, and many more amazing tech companies.`,
    imageSrc: 'https://operation-code-assets.s3.us-east-2.amazonaws.com/headshots/mike_roberts.jpg',
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
                    {role && (
                      <>
                        <br />
                        <h5>{role}</h5>
                      </>
                    )}
                  </>
                }
                image={{
                  source: imageSource,
                  alt: `Headshot of ${name}`,
                }}
              >
                <p
                  className="h-36 overflow-hidden line-clamp-5 mb-5 transition-[height] duration-300 ease-in-out whitespace-pre-line"
                  style={{
                    textOverflow: 'ellipsis',
                  }}
                >
                  {description}
                </p>
                <Button
                  fullWidth
                  onClick={e => {
                    const button = e.target as HTMLButtonElement;
                    const paragraph = button.previousSibling as HTMLParagraphElement;
                    paragraph.classList.toggle('expanded');
                    const hasExpanded = paragraph.classList.contains('expanded');

                    if (hasExpanded) {
                      paragraph.style.height = `${paragraph.scrollHeight}px`;
                      paragraph.classList.remove('h-36', 'line-clamp-5');
                      button.innerText = 'Show Less';
                    } else {
                      paragraph.style.height = '';
                      paragraph.classList.add('h-36', 'line-clamp-5');
                      button.innerText = 'Show More';
                    }
                  }}
                >
                  Show More
                </Button>
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
