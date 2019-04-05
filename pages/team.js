import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import Card from 'components/Cards/Card/Card';
import FlatCard from 'components/Cards/FlatCard/FlatCard';
import { getTeamMembersPromise } from 'common/constants/api';
import { s3 } from 'common/constants/urls';
import styles from './styles/team.css';

export default class team extends React.Component {
  state = {
    boardMembers: [],
    staffMembers: [],
  };

  async componentDidMount() {
    const { data } = await getTeamMembersPromise();
    const boardMembers = data.filter(x => x.group === 'board');
    const staffMembers = data.filter(x => x.group === 'team');

    const boardChair = 'David Molina';
    const CEO = 'Conrad Hollomon';

    this.setState({
      boardMembers: this.getOrderedGroup(boardMembers, boardChair),
      staffMembers: this.getOrderedGroup(staffMembers, CEO),
    });
  }

  getOrderedGroup = (group, leaderName) => {
    const isLeader = member => member.name === leaderName;
    const sortedMembers = group.sort((a, b) => a.id - b.id);
    const leader = sortedMembers.filter(x => isLeader(x));
    const remainingMembers = sortedMembers.filter(x => !isLeader(x));
    return [...leader, ...remainingMembers];
  };

  render() {
    const { boardMembers, staffMembers } = this.state;

    return (
      <div>
        <HeroBanner
          backgroundImageSource={`${s3}heroBanners/lincoln.jpg`}
          className={styles.lincoln}
        >
          Abraham Lincoln To care for him who shall have borne the battle and for his widow, and his
          orphan.
        </HeroBanner>

        <Content
          columns={[
            <div className={styles.boardMembers}>
              {boardMembers.map(({ name, role, image_src: imageSource, description }) => (
                <FlatCard
                  key={`${name} + ${role}`}
                  header={
                    <>
                      <h3>{name}</h3>
                      <br />
                      <h5>{role}</h5>
                    </>
                  }
                  imageSource={imageSource}
                >
                  {description}
                </FlatCard>
              ))}
            </div>,
            <div className={styles.foundingMembers}>
              <p>
                Operation Code deeply appreciates the time, energy, and hard work of our{' '}
                <b>Founding Board Members</b>, including Mark Kerr (Chair), Laura Gomez (Vice
                Chair), Dr. Tyrone Grandison (Vice Chair), Dr. Stacy Chin (Director of Fundraising
                Committee), Liza Rodewald (Director of Military Families Committee), Pete Runyon
                (Secretary/ Treasurer), Josh Carter, Nick Frost, and Aimee Knight on their support,
                dedication and commitment in the early days.
              </p>

              <p style={{ textAlign: 'center' }}>
                <em>Thank you for setting us up for success!</em>
              </p>
            </div>,
          ]}
          title="Our Board"
          theme="white"
        />

        <Content
          columns={staffMembers.map(({ name, role, slackUsername, email }) => (
            <Card key={`${name} + ${role}`}>
              <h4>{name}</h4>

              <hr />

              <h5>{role}</h5>

              <br />

              <p>
                Slack: <i>{slackUsername}</i>
              </p>
              <p>
                Email: <i>{email}</i>
              </p>
            </Card>
          ))}
          title="Our Staff"
          theme="white"
        />
      </div>
    );
  }
}
