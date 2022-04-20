import { arrayOf, object } from 'prop-types';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import { getTeamMembersPromise } from 'common/constants/api';
import { s3 } from 'common/constants/urls';
import { TWO_WEEKS } from 'common/constants/unitsOfTime';
import Content from 'components/Content/Content';
import FlatCard from 'components/Cards/FlatCard/FlatCard';
import sortBy from 'lodash/sortBy';
import styles from 'styles/team.module.css';

export async function getStaticProps() {
  try {
    const { data } = await getTeamMembersPromise();

    // Only members of the "team" group aren't rendered.
    const renderableTeamMembers = data.filter(
      ({ group }) => group === 'board' || group === 'staff',
    );

    // Force Executive Director to be first in list
    const roleToRenderFirst = 'Executive Director';
    const firstTeamMemberRendered = renderableTeamMembers.find(
      ({ role }) => role === roleToRenderFirst,
    );

    // 1. We exclude the Executive Director (since they are always first).
    // 2. Sort in reverse by `imageSrc` so team members without photos are rendered last.
    // 3. Sort by role so the listing makes sense for the emptier looking team members.
    // 4. Then we sort by name.
    const sortedListExcludingFirst = sortBy(
      renderableTeamMembers.filter(({ role }) => role !== roleToRenderFirst),
      [({ imageSrc }) => !imageSrc, 'role', 'name'],
    );

    const sortedListOfTeamMembers = [firstTeamMemberRendered, ...sortedListExcludingFirst];

    return { props: { teamMembers: sortedListOfTeamMembers }, revalidate: TWO_WEEKS };
  } catch (error) {
    throw new Error('getStaticProps in /team failed.');
  }
}

Team.propTypes = {
  teamMembers: arrayOf(object.isRequired).isRequired,
};

function Team({ teamMembers }) {
  return (
    <div className={styles.Team}>
      <Head title="Team" />

      <HeroBanner title="The Team" backgroundImageSource={`${s3}redesign/heroBanners/team.jpg`} />

      <Content
        title="Our Board"
        hasTitleUnderline
        theme="white"
        columns={[
          <div className={styles.teamMembers}>
            {teamMembers.map(({ name, role, imageSrc: imageSource, description }) => (
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
              <b>Founding Board Members</b>, including Mark Kerr (Chair), Laura Gomez (Vice Chair),
              Dr. Tyrone Grandison (Vice Chair), Dr. Stacy Chin (Director of Fundraising Committee),
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

export default Team;
