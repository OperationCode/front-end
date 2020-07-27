import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import LinkButton from 'components/LinkButton/LinkButton';
import Card from 'components/Cards/Card/Card';
import { leadershipCircleLink } from 'common/constants/urls';
import { leadershipCircleMembers } from 'common/constants/leadershipCircleMembers';
import styles from './styles/leadership_circle.module.css';

const pageTitle = 'Leadership Circle';

const leadershipCircleLevels = Object.keys(leadershipCircleMembers);

function LeadershipCircle() {
  return (
    <div className={styles.LeadershipCircle}>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

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
              volunteerism helps the community, whether by bringing in new supporters or by
              mentoring a transitioning veteran or military spouse. Our compelling events allow us
              to connect with leaders in tech, among veterans and active duty military alike, and to
              bring new people join in Operation Code’s work. And our financial contributions secure
              Operation Code’s ability to grow.
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
        title="Operation Code Leadership Circle"
        theme="gray"
        columns={leadershipCircleLevels.map(level => {
          const { donationRange, members } = leadershipCircleMembers[level];

          return (
            <Card className={styles.leadershipCircleMembersCard} key={level}>
              <h5>
                {level} (contributed {donationRange})
              </h5>

              <ul className={styles.leadershipCircleMembersList}>
                {members.map(name => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </Card>
          );
        })}
      />

      <Content
        title="Membership Levels"
        theme="white"
        columns={[
          <div>
            {leadershipCircleLevels.map(level => {
              const { benefits } = leadershipCircleMembers[level];

              return (
                <article key={level}>
                  <h6>{level}</h6>

                  <ul className={styles.benefitsList}>
                    {benefits.map((benefit, index) => {
                      const key = `${level}_${index}`;

                      return <li key={key}>{benefit}</li>;
                    })}
                  </ul>
                </article>
              );
            })}

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
    </div>
  );
}

export default LeadershipCircle;
