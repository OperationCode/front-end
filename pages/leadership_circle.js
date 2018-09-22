import React from 'react';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import Section from 'components/_common_/Section/Section';
import { leadershipCircleLink } from 'common/constants/urls.js';
import styles from './styles/leadership_circle.css';

export default () => (
  <>
    <Section title="Leadership Circle" theme="white">
      <div>
        <h3>Join as a Founding Member!</h3>
        <p>Operation Code is pleased to invite you to join the Leadership Circle.</p>
        <p>
          The Leadership Circle exists for people who passionately believe in the Operation Code
          mission, have a vital interest in our success, recognize the importance of annual giving,
          and are fortunate enough to possess the ability to contribute significantly to Operation
          Code’s drive for impact, growth and sustainability.
        </p>
        <p>
          As Leadership Circle members, we are passionate advocates for the mission. Our
          volunteerism helps the community, whether by bringing in new supporters or by mentoring a
          transitioning veteran or military spouse. Our compelling events allow us to connect with
          leaders in tech, among veterans and active duty military alike, and to bring new people
          join in Operation Code’s work. And our financial contributions secure Operation Code’s
          ability to grow.
        </p>
        <p>
          Please join us and help make our mission a success. Together, we will create a new and
          secure future for today’s veterans and military spouses.
        </p>
        <OutboundLink href={leadershipCircleLink} hasIcon={false}>
          <h6 className={styles.link}>Join and Donate Now</h6>
        </OutboundLink>
        <p className={styles.level}>Benefactor ($2500 or more)</p>
        <ul>
          <li>
            The knowledge that your gift of $2,500 or more supports a scholarship that will help a
            veteran or military spouse to enter code school
          </li>
          <li>
            An invitation to the Chairman’s Dinner, with an opportunity to meet leading thinkers in
            today’s technology companies and the coders of the future
          </li>
          <li>
            Verbal and print recognition of your generous gift at the Operation Code Annual Benefit
            Dinner & Auction
          </li>
          <li>And all benefits listed below</li>
        </ul>
        <p className={styles.level}>Patron ($1000 to $2499)</p>
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
        <p className={styles.level}>Coder ($500 to $999)</p>
        <ul>
          <li>
            The knowledge that your gift of $500 or more supports at least one chapter meetup—an
            invaluable networking and learning opportunity for transitioning veterans and military
            spouses to learn to code
          </li>
          <li>Recognition on website’s Leadership Circle Wall of Honor</li>
          <li>And all benefits listed below</li>
        </ul>
        <p className={styles.level}>Advocate $250 to $499)</p>
        <ul>
          <li>
            The knowledge that your gift of $250 or more supports Operation Code’s mentoring
            program, ensuring that a mentee will gain the knowledge and confidence they need to
            obtain and keep the job of their dreams
          </li>
          <li>Invitations to all Leadership Circle events both virtual and in-person</li>
          <li>And all benefits listed below</li>
        </ul>
        <p className={styles.level}>Friend ($100 to $249)</p>
        <ul>
          <li>
            The knowledge that your gift of $100 or more supports Operation Code’s advocacy programs
            to ensure our men and women who’ve served have access to technical training
          </li>
          <li>Recognition in the annual State of Operation Code report</li>
        </ul>
        <OutboundLink href={leadershipCircleLink} hasIcon={false}>
          <h6 className={styles.link}>Join and Donate Now</h6>
        </OutboundLink>
      </div>
    </Section>
  </>
);
