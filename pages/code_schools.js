import Select from 'react-select';
import { getCodeSchoolsPromise } from 'common/constants/api';
import Head from 'components/head';
import HeroBanner from 'components/_common_/HeroBanner/HeroBanner';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import Section from 'components/_common_/Section/Section';
import Button from 'components/_common_/Button/Button';
import SchoolCard from 'components/Cards/SchoolCard/SchoolCard';
import FlatCard from 'components/Cards/FlatCard/FlatCard';
import { s3 } from 'common/constants/urls';
import States from 'common/constants/dropdown-states-values';
import edx from 'static/images/moocs/edx.jpg';
import treehouse from 'static/images/moocs/treehouse.jpg';
import udacity from 'static/images/moocs/udacity.jpg';
import styles from './styles/code_schools.css';

export default class CodeSchools extends React.Component {
  state = {
    allSchools: [],
    filteredSchools: [],
    moocSchools: [],
    selectedStates: [],
  };

  async componentDidMount() {
    const { data } = await getCodeSchoolsPromise();
    const moocs = [
      {
        logo: edx,
        name: 'edX',
        url: 'https://edx.org',
        text: 'Offers free courses with the option to pay for certificates/grading.',
      },
      {
        logo: treehouse,
        name: 'Team Treehouse',
        url: 'https://teamtreehouse.com',
        text: 'Offers only paid programs, but we have licenses available.',
      },
      {
        logo: udacity,
        name: 'Udacity',
        url: 'https://udacity.com',
        text: 'Offers free courses with the option to pay for certificates/grading.',
      },
    ];
    this.setState({ allSchools: data, filteredSchools: data, moocSchools: moocs });
  }

  filterVaApproved = () => {
    const { allSchools } = this.state;
    const vaApproved = allSchools.filter(school =>
      school.locations.some(location => location.va_accepted),
    );
    this.setState({ filteredSchools: vaApproved, selectedStates: [] });
  };

  filterOnline = () => {
    const { allSchools } = this.state;
    const onlineSchools = allSchools.filter(school => school.has_online);
    this.setState({ filteredSchools: onlineSchools, selectedStates: [] });
  };

  showAll = () => {
    const { allSchools } = this.state;
    this.setState({ filteredSchools: allSchools, selectedStates: [] });
  };

  filterByState = selectedOptions => {
    const { allSchools } = this.state;
    const states = selectedOptions.map(state => state.value);
    const stateSchools = allSchools.filter(school =>
      school.locations.some(location => states.includes(location.state)),
    );
    this.setState({ filteredSchools: stateSchools, selectedStates: selectedOptions });
  };

  prepUrl = name =>
    `${s3}codeSchoolLogos/${name
      .trim()
      .split(' ')
      .join('_')
      .toLowerCase()}.jpg`;

  render() {
    const { state } = this;

    return (
      <>
        <Head title="Code Schools" />
        <HeroBanner title="Code Schools" imageSource="">
          <p>
            Whether you&apos;re trying to find out more about a chosen school, or are just gettting
            started in your search, we&apos;re here to help. We&apos;ve even partnered with some
            schools to offer scholarships, and discounts for our members.
          </p>
        </HeroBanner>
        <Section theme="secondary" hasHeadingLines={false}>
          <div className={styles.whatAreQuestionsSectionWrapper}>
            <div>
              <h6>What Are Code Schools?</h6>
              <p>
                Code schools are accelerated learning programs that will prepare you for a career in
                software development. Each school listed below ranges in length, vary in tuition
                costs, and in programming languages. Desirable from an employer&apos;s standpoint,
                code schools are founded by software developers who saw a need for more programmers
                and aspired to teach the next generation. We encourage you to check out the schools
                below, do your research, and ask fellow techies in our Slack Community.
              </p>
            </div>
            <div>
              <h6>What are MOOCs?</h6>
              <p>
                Massive, Open, Online Courses (or MOOCs) are course study programs made available
                over the internet! Typically there are start and end dates, but the work itself is
                done at your own pace. MOOCs are usually free, but there are certain benefits to
                paying for premium aspects of MOOCs.
              </p>
            </div>

            <aside style={{ textAlign: 'center' }}>
              <h6>Would you like your school listed here?</h6>
              <p>
                Please fill out our request form,{' '}
                <OutboundLink
                  analyticsEventLabel="Code School Add Request"
                  href="https://op.co.de/code-school-request"
                >
                  here
                </OutboundLink>
                .
              </p>
            </aside>
          </div>
        </Section>

        <Section theme="gray" title="Schools" hasHeadingLines>
          <div className={styles.buttonWrapper}>
            <Button theme="primary" onClick={this.showAll}>
              All Schools{' '}
            </Button>
            <Button theme="primary" onClick={this.filterVaApproved}>
              VA Approved Schools{' '}
            </Button>
            <Button theme="primary" onClick={this.filterOnline}>
              Online Schools{' '}
            </Button>
          </div>
          <div className={styles.buttonWrapper}>
            <Select
              instanceId="state_select"
              placeholder="Start typing a state..."
              className={styles.select}
              isMulti
              name="States"
              options={States}
              onChange={this.filterByState}
              value={state.selectedStates}
            />
          </div>
          <div className={styles.schoolCardsWrapper}>
            {state.filteredSchools.map(school => (
              <div key={`${school.name}`}>
                <SchoolCard
                  hasHardwareIncluded={school.hardware_included}
                  hasHousing={school.has_housing}
                  hasOnline={school.has_online}
                  hasOnlyOnline={school.online_only}
                  isFullTime={school.full_time}
                  locations={school.locations}
                  logoSource={this.prepUrl(school.name)}
                  name={school.name}
                  website={school.url}
                />
              </div>
            ))}
          </div>
        </Section>
        <Section theme="secondary" title="Mooc Schools" hasHeadingLines>
          <div className={styles.moocCardsWrapper}>
            {state.moocSchools.map(mooc => (
              <FlatCard key={mooc.name} imageSource={mooc.logo} imageAlt={`${mooc.name} logo`}>
                <>
                  {mooc.text}
                  <div className={styles.centered}>
                    <OutboundLink href={mooc.url} analyticsEventLabel={`Link to ${mooc.name}`}>
                      {mooc.name}
                    </OutboundLink>
                  </div>
                </>
              </FlatCard>
            ))}
          </div>
        </Section>
      </>
    );
  }
}
