import Select from 'react-select';
import { getCodeSchoolsPromise } from 'common/constants/api';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import Section from 'components/_common_/Section/Section';
import Button from 'components/_common_/Button/Button';
import SchoolCard from 'components/Cards/SchoolCard/SchoolCard';
import { s3 } from 'common/constants/urls';
import States from 'pages/CodeSchools/States';
import styles from './styles/code_schools.css';

export default class CodeSchools extends React.Component {
  state = {
    allSchools: [],
    filteredSchools: [],
  };

  async componentDidMount() {
    const { data } = await getCodeSchoolsPromise();
    this.setState({ allSchools: data });
    this.setState({ filteredSchools: data });
  }

  filterVaApproved = () => {
    const { allSchools } = this.state;
    const vaApproved = allSchools.filter(school => {
      const vaFound = school.locations.some(location => location.va_accepted === true);
      return vaFound;
    });
    this.setState({ filteredSchools: vaApproved });
  };

  filterOnline = () => {
    const { allSchools } = this.state;
    const onlineSchools = allSchools.filter(school => school.has_online);
    this.setState({ filteredSchools: onlineSchools });
  };

  filterMoocs = () => {
    const { allSchools } = this.state;
    const moocSchools = allSchools.filter(school => school.mooc);
    this.setState({ filteredSchools: moocSchools });
  };

  showAll = () => {
    const { allSchools } = this.state;
    this.setState({ filteredSchools: allSchools });
  };

  filterByState = selectedState => {
    const { allSchools } = this.state;
    const stateSchools = allSchools.filter(school => {
      const stateLocatonFound = school.locations.some(
        location => location.state === selectedState.value,
      );
      return stateLocatonFound;
    });
    this.setState({ filteredSchools: stateSchools });
  };

  render() {
    const { state } = this;

    return (
      <>
        <Section theme="gray" title="Code Schools">
          <p>
            Whether you&apos;re trying to find out more about a chosen school, or are just gettting
            started in your search, we&apos;re here to help. We&apos;ve even partnered with some
            schools to offer scholarships, and discounts for our members.
          </p>
          <h6>What Are Code Schools?</h6>
          <p>
            Code schools are accelerated learning programs that will prepare you for a career in
            software development. Each school listed below ranges in length, vary in tuition costs,
            and in programming languages. Desirable from an employer&apos;s standpoint, code schools
            are founded by software developers who saw a need for more programmers and aspired to
            teach the next generation. We encourage you to check out the schools below, do your
            research, and ask fellow techies in our Slack Community.
          </p>
          <h6>What are MOOCs?</h6>
          <p>
            Massive, Open, Online Courses (or MOOCs) are course study programs made available over
            the internet! Typically there are start and end dates, but the work itself is done at
            your own pace. MOOCs are usually free, but there are certain benefits to paying for
            premium aspects of MOOCs.
          </p>
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
        </Section>
        <Section theme="gray" title="Schools" hasHeadingLines>
          <div className={styles.filterButtons}>
            <Button theme="primary" onClick={this.showAll}>
              All Schools{' '}
            </Button>
            <Button theme="primary" onClick={this.filterVaApproved}>
              VA Approved Schools{' '}
            </Button>
            <Button theme="primary" onClick={this.filterOnline}>
              Online Schools{' '}
            </Button>
            <Button theme="primary" onClick={this.filterMoocs}>
              Mooc Schools{' '}
            </Button>
            <Select
              className={styles.select}
              placeholder="Start typing a state..."
              options={States}
              autoBlur
              autosize
              multi
              onChange={this.filterByState}
            />
          </div>
          <div className={styles.flexGrid}>
            {state.filteredSchools.map(school => (
              <div key={`${school.name}`}>
                <SchoolCard
                  hasHardwareIncluded={school.hardware_included}
                  hasHousing={school.has_housing}
                  hasOnline={school.has_online}
                  hasOnlyOnline={school.online_only}
                  isFullTime={school.full_time}
                  locations={school.locations}
                  logoSource={`${s3}codeSchoolLogos/${school.name
                    .trim()
                    .split(' ')
                    .join('_')
                    .toLowerCase()}.jpg`}
                  name={school.name}
                  website={school.url}
                />
              </div>
            ))}
          </div>
        </Section>
      </>
    );
  }
}
