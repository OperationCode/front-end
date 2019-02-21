// eslint-disable-next-line no-restricted-imports
import React from 'react';
import { getTeamMembersPromise } from 'common/constants/api';
import { s3 } from 'common/constants/urls';
import QuoteBanner from 'components/_common_/HeroBanner/HeroBanner';
import Section from 'components/_common_/Section/Section';
import TeamCard from 'components/_common_/TeamCard/TeamCard';
import styles from './styles/team.css';

export default class team extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boardMembers: null,
      staffMembers: null,
    };
  }

  async componentWillMount() {
    const { data } = await getTeamMembersPromise();
    const json = data;
    const boardMembers = json.filter(x => x.group === 'board');
    const staffMembers = json.filter(x => x.group === 'team');
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
        <QuoteBanner
          className={styles.lincoln}
          imageSource={`${s3}heroBanners/lincoln.jpg`}
          author="Abraham Lincoln"
          quote="To care for him who shall have borne the battle and for his widow, and his orphan."
        />
        <Section title="Our Board" theme="white">
          <div className={styles.boardMembers}>
            {boardMembers.map(boardMember => (
              <TeamCard
                key={`${boardMember.name} + ${boardMember.role}`}
                name={boardMember.name}
                role={boardMember.role}
                description={boardMember.description}
                imageSrc={boardMember.image_src}
              />
            ))}
          </div>
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
          </div>
        </Section>
        <Section title="Our Staff" theme="white">
          <div className={styles.staffMembers}>
            {staffMembers.map(staffMember => (
              <TeamCard
                key={`${staffMember.name} + ${staffMember.role}`}
                name={staffMember.name}
                role={staffMember.role}
                slack={staffMember.slackUsername}
                email={staffMember.email}
                isBoard={false}
              />
            ))}
          </div>
        </Section>
      </div>
    );
  }
}
