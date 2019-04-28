import Select from 'react-select';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import FlatCard from 'components/Cards/FlatCard/FlatCard';
import SchoolCard from 'components/Cards/SchoolCard/SchoolCard';
import Button from 'components/Button/Button';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import Modal from 'components/Modal/Modal';
import { getCodeSchoolsPromise } from 'common/constants/api';
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
    locationsModalInfo: { name: '', locations: [] },
  };

  async componentDidMount() {
    const { data } = await getCodeSchoolsPromise();

    const moocSchools = [
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

    this.setState({ allSchools: data, filteredSchools: data, moocSchools });
  }

  handleModalOpen = ({ name, locations }) =>
    this.setState({ locationsModalInfo: { name, locations } });

  handleModalClose = () => this.setState({ locationsModalInfo: { name: '', locations: [] } });

  filterOnline = () => {
    const { allSchools } = this.state;
    const onlineSchools = allSchools.filter(school => school.has_online);

    this.setState({ filteredSchools: onlineSchools, selectedStates: [] });
  };

  filterState = selectedOptions => {
    const { allSchools } = this.state;
    const states = selectedOptions.map(state => state.value);
    const stateSchools = allSchools.filter(school =>
      school.locations.some(location => states.includes(location.state)),
    );

    if (states.length > 0) {
      this.setState({ filteredSchools: stateSchools, selectedStates: selectedOptions });
    } else {
      this.showAllSchools();
    }
  };

  filterVaApproved = () => {
    const { allSchools } = this.state;
    const vaApproved = allSchools.filter(school =>
      school.locations.some(location => location.va_accepted),
    );

    this.setState({ filteredSchools: vaApproved, selectedStates: [] });
  };

  showAllSchools = () => {
    const { allSchools } = this.state;
    this.setState({ filteredSchools: allSchools, selectedStates: [] });
  };

  render() {
    const { state } = this;
    const isModalOpen = Boolean(state.locationsModalInfo.name);

    return (
      <>
        <Head title="Code Schools" />

        <HeroBanner title="Code Schools">
          <p>
            Whether you&apos;re trying to find out more about a chosen school, or are just gettting
            started in your search, we&apos;re here to help. We&apos;ve even partnered with some
            schools to offer scholarships, and discounts for our members.
          </p>

          <br />

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
        </HeroBanner>

        <Content
          columns={[
            <div className={styles.intro}>
              <article className={styles.termDefinition}>
                <h6>What Are Code Schools?</h6>
                <p>
                  Code schools are accelerated learning programs that will prepare you for a career
                  in software development. Each school listed below ranges in length, vary in
                  tuition costs, and in programming languages. Desirable from an employer&apos;s
                  standpoint, code schools are founded by software developers who saw a need for
                  more programmers and aspired to teach the next generation. We encourage you to
                  check out the schools below, do your research, and ask fellow techies in our Slack
                  Community.
                </p>
              </article>

              <article className={styles.termDefinition}>
                <h6>What are MOOCs?</h6>
                <p>
                  Massive, Open, Online Courses (or MOOCs) are course study programs made available
                  over the internet! Typically there are start and end dates, but the work itself is
                  done at your own pace. MOOCs are usually free, but there are certain benefits to
                  paying for premium aspects of MOOCs.
                </p>
              </article>
            </div>,
          ]}
        />

        <Content
          theme="gray"
          title="Schools"
          hasTitleUnderline
          columns={[
            <Button theme="primary" onClick={this.showAllSchools}>
              All Schools{' '}
            </Button>,
            <Button theme="primary" onClick={this.filterVaApproved}>
              VA Approved Schools{' '}
            </Button>,
            <Button theme="primary" onClick={this.filterOnline}>
              Online Schools{' '}
            </Button>,
            <Select
              instanceId="state_select"
              placeholder="Start typing a state..."
              className={styles.select}
              isMulti
              name="States"
              options={States}
              onChange={this.filterState}
              value={state.selectedStates}
            />,
            <div className={styles.schoolCardsWrapper}>
              {state.filteredSchools.map(school => (
                <SchoolCard
                  key={`${school.name}`}
                  hasHardwareIncluded={school.hardware_included}
                  hasHousing={school.has_housing}
                  hasOnline={school.has_online}
                  hasOnlyOnline={school.online_only}
                  isFullTime={school.full_time}
                  locations={school.locations}
                  logoSource={school.logo}
                  name={school.name}
                  website={school.url}
                  toggleModal={this.handleModalOpen}
                />
              ))}
            </div>,
          ]}
        />

        <Content
          title="Mooc Schools"
          hasTitleUnderline
          columns={state.moocSchools.map(mooc => (
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
        />

        <Modal
          isOpen={isModalOpen}
          screenReaderLabel="Campus locations"
          onRequestClose={this.handleModalClose}
          className={styles.schoolLocationModal}
        >
          <>
            <h3>{state.locationsModalInfo.name} Campuses</h3>
            {state.locationsModalInfo.locations.map(location => (
              <div className={styles.schoolLocalModalItem}>
                {`${location.city}, ${location.state}`}
              </div>
            ))}
          </>
        </Modal>
      </>
    );
  }
}
