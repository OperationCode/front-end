import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import LinkButton from 'components/LinkButton/LinkButton';
import Card from 'components/Cards/Card/Card';
import { leadershipCircleLink } from 'common/constants/urls';
import honorRoll from 'common/constants/leadershipCircle';
import styles from './styles/leadership_circle.css';

export default () => (
  <>
    <Head title="Leadership Circle" />

    <HeroBanner title="Leadership Circle" />

    <Content
      title="Join Today!"
      theme="white"
      columns={[
        <div>
          <p className={styles.justifyAlign}>
            Operation Code is pleased to invite you to join the Leadership Circle.
          </p>

          <p className={styles.justifyAlign}>
            The Leadership Circle exists for people who passionately believe in the Operation Code
            mission, have a vital interest in our success, recognize the importance of annual
            giving, and are fortunate enough to possess the ability to contribute significantly to
            Operation Code’s drive for impact, growth and sustainability.
          </p>

          <p className={styles.justifyAlign}>
            As Leadership Circle members, we are passionate advocates for the mission. Our
            volunteerism helps the community, whether by bringing in new supporters or by mentoring
            a transitioning veteran or military spouse. Our compelling events allow us to connect
            with leaders in tech, among veterans and active duty military alike, and to bring new
            people join in Operation Code’s work. And our financial contributions secure Operation
            Code’s ability to grow.
          </p>

          <p className={styles.justifyAlign}>
            Please join us and help make our mission a success. Together, we will create a new and
            secure future for today’s veterans and military spouses.
          </p>

          <div className={styles.linkButtonContainer}>
            <LinkButton
              analyticsEventLabel="Join/Donate top"
              href={leadershipCircleLink}
              theme="secondary"
            >
              Join and Donate Now
            </LinkButton>
          </div>
        </div>,
      ]}
    />
    <Content
      title="Operation Code Honor Roll"
      theme="gray"
      columns={[
        <Card className={styles.honorRollCard}>
          <h6>Benefactor ($2500 or more)</h6>
          <ul className={styles.honorRollList}>
            <li>Conrad Hollomon</li>
            <li>Chris Todd</li>
            <li>Laura Wickett</li>
          </ul>
        </Card>,

        <Card className={styles.honorRollCard}>
          <h6>Patron ($1000 to $2499)</h6>
          <ul className={styles.honorRollList}>
            <li>Liliana Monge</li>
            <li>Aaron Sahlstrom</li>
            <li>Nic and Gwyn Benders</li>
          </ul>
        </Card>,

        <Card className={styles.honorRollCard}>
          <h6>Coder ($500 to $999)</h6>
          <ul className={styles.honorRollList}>
            <li>James Davis</li>
            <li>Thomas McCuch</li>
            <li>George Holmberg</li>
            <li>Matthew Frost</li>
          </ul>
        </Card>,

        <Card className={styles.honorRollCard}>
          <h6>Advocate ($250 to $499)</h6>
          <ul className={styles.honorRollList}>
            <li>This could be you!</li>
          </ul>
        </Card>,

        <Card className={styles.honorRollCard}>
          <h6>Friend ($100 to $249)</h6>
          <ul className={styles.honorRollList}>
            <li>Nell Shamrell-Harrington</li>
            <li>Walley Y. Yang</li>
            <li>Laura Cabrera</li>
            <li>Michael Bubb</li>
            <li>Scott Weaver</li>
            <li>Andrea Griffiths</li>
            <li>Jim Shannon</li>
            <li>John L. Carmichael</li>
          </ul>
        </Card>,
      ]}
    />

    <Content
      title="Membership Levels"
      theme="white"
      columns={[
        <div>
          <h6>Benefactor ($2500 or more)</h6>
          <ul>
            <li>
              The knowledge that your gift of $2,500 or more supports a scholarship that will help a
              veteran or military spouse to enter code school
            </li>
            <li>
              An invitation to the Chairman’s Dinner, with an opportunity to meet leading thinkers
              in today’s technology companies and the coders of the future
            </li>
            <li>
              Verbal and print recognition of your generous gift at the Operation Code Annual
              Benefit Dinner & Auction
            </li>
            <li>And all benefits listed below</li>
          </ul>

          <h6>Patron ($1000 to $2499)</h6>
          <ul>
            <li>
              The knowledge that your gift of $1,000 or more supports scholarships that will bring
              veterans and military spouses to networking opportunities at tech conferences
            </li>
            <li>
              Opportunity to join the Leadership Circle Council as a volunteer leader for the cause
            </li>
            <li>Recognition at a Leadership Circle event</li>
            <li>And all benefits listed below</li>
          </ul>

          <h6>Coder ($500 to $999)</h6>
          <ul>
            <li>
              The knowledge that your gift of $500 or more supports at least one chapter meetup—an
              invaluable networking and learning opportunity for transitioning veterans and military
              spouses to learn to code
            </li>
            <li>Recognition on website’s Leadership Circle Wall of Honor</li>
            <li>And all benefits listed below</li>
          </ul>

          <h6>Advocate ($250 to $499)</h6>
          <ul>
            <li>
              The knowledge that your gift of $250 or more supports Operation Code’s mentoring
              program, ensuring that a mentee will gain the knowledge and confidence they need to
              obtain and keep the job of their dreams
            </li>
            <li>Invitations to all Leadership Circle events both virtual and in-person</li>
            <li>And all benefits listed below</li>
          </ul>

          <h6>Friend ($100 to $249)</h6>
          <ul>
            <li>
              The knowledge that your gift of $100 or more supports Operation Code’s advocacy
              programs to ensure our men and women who’ve served have access to technical training
            </li>
            <li>Recognition in the annual State of Operation Code report</li>
          </ul>

          <div className={styles.linkButtonContainer}>
            <LinkButton
              analyticsEventLabel="Join/Donate bottom"
              href={leadershipCircleLink}
              theme="secondary"
            >
              Join and Donate Now
            </LinkButton>
          </div>
        </div>,
      ]}
    />
  </>
);
