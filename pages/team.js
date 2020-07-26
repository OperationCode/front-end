import { arrayOf, object, string } from 'prop-types';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import { getTeamMembersPromise } from 'common/constants/api';
import { s3 } from 'common/constants/urls';
import { getServerErrorMessage } from 'common/utils/api-utils';
import Content from 'components/Content/Content';
import Alert from 'components/Alert/Alert';
import FlatCard from 'components/Cards/FlatCard/FlatCard';
import styles from './styles/team.module.css';

export async function getStaticProps() {
  try {
    const { data } = await getTeamMembersPromise();

    const boardMembers = data.filter(({ group }) => group === 'board' || group === 'staff');

    const firstListedMemberName = 'David Molina';

    const firstBoardMember = boardMembers.find(({ name }) => name === firstListedMemberName);
    const boardMembersExcludingFirst = boardMembers.filter(
      ({ name }) => name !== firstListedMemberName,
    );

    const sortedBoardMembers = [firstBoardMember, ...boardMembersExcludingFirst];

    return { boardMembers: sortedBoardMembers };
  } catch (error) {
    return { errorMessage: getServerErrorMessage(error) };
  }
}

Team.propTypes = {
  boardMembers: arrayOf(object.isRequired),
  errorMessage: string,
};

Team.defaultProps = {
  boardMembers: [],
  errorMessage: '',
};

function Team({ boardMembers, errorMessage }) {
  return (
    <div>
      <HeroBanner title="The Team" backgroundImageSource={`${s3}redesign/heroBanners/team.jpg`} />
      <Content
        title="Our Board"
        hasTitleUnderline
        theme="white"
        columns={[
          errorMessage ? (
            <Alert type="error">{errorMessage}</Alert>
          ) : (
            <div className={styles.boardMembers}>
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
            </div>
          ),
          <div className={styles.foundingMembers}>
            <p>
              Operation Code deeply appreciates the time, energy, and hard work of our{' '}
              <b>Founding Board Members</b>, including Mark Kerr (Chair), Laura Gomez (Vice Chair),
              Dr. Tyrone Grandison (Vice Chair), Dr. Stacy Chin (Director of Fundraising Committee),
              Liza Rodewald (Director of Military Families Committee), Pete Runyon (Secretary/
              Treasurer), Josh Carter, Nick Frost, and Aimee Knight on their support, dedication and
              commitment in the early days.
            </p>

            <p style={{ textAlign: 'center' }}>
              <em>Thank you for setting us up for success!</em>
            </p>
          </div>,
        ]}
      />
    </div>
  );
}

export default Team;
