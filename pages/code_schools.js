import { useState } from 'react';
import { array } from 'prop-types';
import Head from 'components/head';
import ThemedReactSelect from 'components/Form/Select/ThemedReactSelect';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import FlatCard from 'components/Cards/FlatCard/FlatCard';
import SchoolCard from 'components/Cards/SchoolCard/SchoolCard';
import Button from 'components/Buttons/Button/Button';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import Modal from 'components/Modal/Modal';
import { getCodeSchoolsPromise } from 'common/constants/api';
import States from 'common/constants/dropdown-states-values';
import { ONE_DAY } from 'common/constants/unitsOfTime';
import { SCHOOL_LOCATION_LIST_ITEM } from 'common/constants/testIDs';
import edx from 'static/images/moocs/edx.jpg';
import treehouse from 'static/images/moocs/treehouse.jpg';
import udacity from 'static/images/moocs/udacity.jpg';
import styles from 'styles/code_schools.module.css';

const pageTitle = 'Code Schools';

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

export async function getStaticProps() {
  const { data: allSchools } = await getCodeSchoolsPromise();

  if (allSchools?.length <= 0) {
    throw new Error('`getCodeSchoolsPromise` returned an empty list');
  }

  return {
    props: {
      allSchools,
    },
    revalidate: ONE_DAY,
  };
}

CodeSchools.propTypes = {
  allSchools: array.isRequired,
};

function CodeSchools({ allSchools }) {
  const [filteredSchools, setFilterSchools] = useState(allSchools);
  const [selectedStates, setSelectedStates] = useState([]);
  const [locationsModalInfo, setLocationsModalInfo] = useState({ name: '', locations: [] });

  const handleModalOpen = ({ name, locations }) => setLocationsModalInfo({ name, locations });

  const handleModalClose = () => setLocationsModalInfo({ name: '', locations: [] });

  const filterOnline = () => {
    const onlineSchools = allSchools.filter(school => school.hasOnline);
    setFilterSchools(onlineSchools);
    setSelectedStates([]);
  };

  const showAllSchools = () => {
    setFilterSchools(allSchools);
    setSelectedStates([]);
  };

  const filterState = selectedOptions => {
    if (!selectedOptions) {
      showAllSchools();
      return;
    }
    const states = selectedOptions.map(state => state.value);
    const stateSchools = allSchools.filter(school =>
      school.locations.some(location => states.includes(location.state)),
    );

    if (states.length > 0) {
      setFilterSchools(stateSchools);
      setSelectedStates(selectedOptions);
    } else {
      showAllSchools();
    }
  };

  const filterVaApproved = () => {
    const vaApproved = allSchools.filter(school =>
      school.locations.some(location => location.vaAccepted),
    );
    setFilterSchools(vaApproved);
    setSelectedStates([]);
  };

  const filterVetTecApproved = () => {
    const vetTecApprovedSchools = allSchools.filter(school => school.isVetTecApproved);
    setFilterSchools(vetTecApprovedSchools);
    setSelectedStates([]);
  };

  const isModalOpen = Boolean(locationsModalInfo.name);

  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle}>
        <p>
          Whether you&apos;re trying to find out more about a chosen school, or are just gettting
          started in your search, we&apos;re here to help. We&apos;ve even partnered with some
          schools to offer scholarships, and discounts for our members.
        </p>

        <br />

        <aside>
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
                Code schools are accelerated learning programs that will prepare you for a career in
                software development. Each school listed below ranges in length, vary in tuition
                costs, and in programming languages. Desirable from an employer&apos;s standpoint,
                code schools are founded by software developers who saw a need for more programmers
                and aspired to teach the next generation. We encourage you to check out the schools
                below, do your research, and ask fellow techies in our Slack Community.
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

            <article className={styles.termDefinition}>
              <h6>What is VET TEC?</h6>
              <p>
                This innovative new pilot program pairs eligible Veterans with market-leading
                Training Providers offering the high-tech training and skills development sought by
                employers. You will have your classes and training paid for by VA and will receive a
                monthly housing stipend during your training. When you&apos;re accepted into the
                program, you&apos;ll train in one of the five areas (computer software, information
                science, computer programming, media application, or data processing) of high-tech
                training.
              </p>

              <p>
                Please note that we update our database periodically according to the{' '}
                <OutboundLink
                  analyticsEventLabel="VET TEC Providers"
                  href="https://www.benefits.va.gov/GIBILL/FGIB/VetTecTrainingProviders.asp"
                >
                  official list of VET TEC Providers
                </OutboundLink>
                , but we may display incorrect information in regards to VET TEC-approved programs.
                <br />
                <b>Last update: October 2nd, 2019.</b>
              </p>

              <p>
                Interested in learning more?
                <br />
                See{' '}
                <OutboundLink
                  analyticsEventLabel="VET TEC Info Website"
                  href="https://www.benefits.va.gov/GIBILL/fgib/VetTec_Providers.asp"
                >
                  the VA&apos;s website about VET TEC info.
                </OutboundLink>
              </p>
            </article>
          </div>,
        ]}
        theme="white"
      />

      <Content
        theme="gray"
        title="Schools"
        hasTitleUnderline
        columns={[
          <Button theme="primary" onClick={showAllSchools}>
            All Schools
          </Button>,
          <Button theme="primary" onClick={filterVaApproved}>
            Schools Accepting GI Bill
          </Button>,
          <Button theme="primary" onClick={filterVetTecApproved}>
            Schools Accepting Vet Tec
          </Button>,
          <Button theme="primary" onClick={filterOnline}>
            Online Schools
          </Button>,
          <div className={styles.filterContainer}>
            <h5>Filter By State</h5>
            <ThemedReactSelect
              instanceId="state_select"
              placeholder="Start typing a state..."
              className={styles.select}
              isMulti
              name="States"
              options={States}
              onChange={filterState}
              value={selectedStates}
            />
          </div>,
          <div className={styles.schoolCardsWrapper}>
            {filteredSchools.map(school => (
              <SchoolCard
                key={`${school.name}`}
                isVetTecApproved={school.isVetTecApproved}
                hasHardwareIncluded={school.hardwareIncluded}
                hasHousing={school.hasHousing}
                hasOnline={school.hasOnline}
                hasOnlyOnline={school.onlineOnly}
                isFullTime={school.fullTime}
                locations={school.locations}
                logoSource={school.logo}
                name={school.name}
                website={school.url}
                toggleModal={handleModalOpen}
              />
            ))}
          </div>,
        ]}
      />

      <Content
        title="Mooc Schools"
        hasTitleUnderline
        columns={moocSchools.map(mooc => (
          <FlatCard key={mooc.name} image={{ source: mooc.logo, alt: `${mooc.name} logo` }}>
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
        onRequestClose={handleModalClose}
        className={styles.schoolLocationModal}
      >
        <>
          <h4>{locationsModalInfo.name} Campuses</h4>

          <ul className={styles.schoolLocationList}>
            {locationsModalInfo.locations.map(({ city, state }) => {
              const location = `${city}, ${state}`;

              return (
                <li
                  className={styles.schoolLocalModalItem}
                  key={location}
                  data-testid={SCHOOL_LOCATION_LIST_ITEM}
                >
                  {location}
                </li>
              );
            })}
          </ul>
        </>
      </Modal>
    </>
  );
}

export default CodeSchools;
