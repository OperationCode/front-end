import classNames from 'classnames';
import TrackVisibility from 'react-on-screen';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import LinkButton from 'components/Buttons/LinkButton/LinkButton';
import Heading from 'components/Heading/Heading';
import Badge from 'components/Badge/Badge';
import Content from 'components/Content/Content';
import JoinSection from 'components/ReusableSections/JoinSection/JoinSection';
import FlatCard from 'components/Cards/FlatCard/FlatCard';
// import Carousel from 'nuka-carousel';
import BookIcon from 'static/images/icons/FontAwesome/book-solid.svg';
import UtensilsIcon from 'static/images/icons/FontAwesome/utensils-solid.svg';
import BuildingIcon from 'static/images/icons/FontAwesome/building_icon.svg';
import BullhornIcon from 'static/images/icons/FontAwesome/bullhorn-solid.svg';
// import LeftAngleIcon from 'static/images/icons/FontAwesome/angle-left-solid.svg';
// import RightAngleIcon from 'static/images/icons/FontAwesome/angle-right-solid.svg';
import UserIcon from 'static/images/icons/FontAwesome/user-solid.svg';
import DiversityIcon from 'static/images/icons/FontAwesome/users-solid.svg';
import { s3 } from 'common/constants/urls';
import styles from 'styles/events.module.css';

const pageTitle = 'Events';

const VISIBILITY_OFFSET = 400;

const sponsorItems = [
  {
    icon: <BookIcon />,
    label: 'Education materials',
  },
  {
    icon: <BuildingIcon />,
    label: 'Workspaces for meetups',
  },
  {
    icon: <UtensilsIcon />,
    label: 'Food for longer meetups',
  },
];

const hostEventItems = [
  {
    icon: <BullhornIcon />,
    label: 'Raise awareness of our cause',
  },
  {
    icon: <DiversityIcon />,
    label: 'Incentivize membership',
  },
  {
    icon: <UserIcon />,
    label: 'Champion underrepresented groups',
  },
];

/* commented out until api endpoints */
// const carouselItems = [
//   {
//     label: 'OpCode North Carolina: Durham',
//     date: '10/06/2018',
//   },
//   {
//     label: 'Hacktober',
//     date: '10/01/2018',
//   },
//   {
//     label: 'OpCode Boston',
//   },
//   {
//     label: 'OpCode North Carolina: Durham',
//     date: '10/06/2018',
//   },
//   {
//     label: 'Hacktober',
//     date: '10/01/2018',
//   },
//   {
//     label: 'OpCode Boston',
//   },
//   {
//     label: 'OpCode North Carolina: Durham',
//     date: '10/06/2018',
//   },
// ];

function Events() {
  return (
    <div className={styles.Events}>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} backgroundImageSource={`${s3}redesign/heroBanners/events.jpg`}>
        <>
          <p className={styles.justifyAlign}>
            Need more Operation Code in your life? From conventions to tech meetups, we are where
            you are! There are 7,000+ members across more than 20 states!
          </p>

          <LinkButton
            href="https://www.meetup.com/pro/operationcode"
            className={styles.topMargin}
            analyticsEventLabel="Meetup.com Locations Link"
          >
            See Locations
          </LinkButton>
        </>
      </HeroBanner>

      {/* <Content
        title="Upcoming Events:"
        theme="gray"
        columns={[
          <p className={styles.eventsLeadText}>
            Be sure to check back often or join your local meetup for a more up to date list of
            meetups or engagements
          </p>,
        ]}
      /> */}

      {/* commented out until api endpoints */}
      {/* <div className={styles.eventsCarousel}>
        <Carousel
          slideWidth="325px"
          renderCenterLeftControls={({ previousSlide }) => (
            <button type="button" className={styles.carouselControlLeft} onClick={previousSlide}>
              <LeftAngleIcon />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button type="button" className={styles.carouselControlRight} onClick={nextSlide}>
              <RightAngleIcon />
            </button>
          )}
          renderBottomCenterControls={null}
        >
          {carouselItems.map(item => (
            <div className={styles.eventsCarouselItem} key={item.label}>
              {item.label}
              {item.date && <div className={styles.eventsCarouselItemDate}>{item.date}</div>}
            </div>
          ))}
        </Carousel>
      </div> */}

      <Content
        // backgroundImageSource={`${s3}redesign/heroBanners/events.jpg`}
        id="meetupCardsBanner"
        columns={[
          <FlatCard
            button={
              <LinkButton
                href="https://www.meetup.com/pro/operationcode"
                analyticsEventLabel="Meetup.com Locations Link"
              >
                Locations
              </LinkButton>
            }
          >
            <span className={styles.meetupCardHeader}>Find Your Local Meetup</span>
          </FlatCard>,
          <FlatCard
            button={
              <LinkButton
                href="mailto:staff@operationcode.org?subject=Start Meetup"
                analyticsEventLabel="Start Meetup"
              >
                Find Out How
              </LinkButton>
            }
          >
            <span className={styles.meetupCardHeader}>Start A Meetup In Your Area</span>
          </FlatCard>,
          <FlatCard button={<LinkButton href="/donate">Find Out How</LinkButton>}>
            <span className={styles.meetupCardHeader}>Donate To Your Local Meetup</span>
          </FlatCard>,
        ]}
      />

      <Content
        title="Want to become a sponsor?"
        theme="gray"
        columns={[
          <p>Sponsoring a meetup ensures we have access to:</p>,
          <div className={styles.badgeGroupings}>
            {sponsorItems.map(item => (
              <Badge
                key={item.label}
                icon={item.icon}
                label={item.label}
                className={styles.badge}
              />
            ))}
          </div>,
        ]}
      />

      <Content
        columns={[
          <TrackVisibility offset={VISIBILITY_OFFSET}>
            {({ isVisible }) => (
              <div className={classNames(styles.image, { [styles.showImage]: isVisible })}>
                <img
                  src={`${s3}redesign/images/chef_seattle_meetup.jpg`}
                  alt="Nell Shamrell-Harrington gives a talk at Chef in Seattle"
                />
              </div>
            )}
          </TrackVisibility>,
          <div>
            <Heading text="Sponsor a Meetup" headingLevel={2} />

            <p className={styles.justifyAlign}>
              From classes, to hackathons, to contributing to open source projects as a group. Our
              meetups are just one way we engage with our veterans and our community. Wanna help
              out? Find out how you can sponsor us, from food, to educational materials, and a space
              for us to meet.
            </p>

            <div className={styles.centeredText}>
              <LinkButton
                href="mailto:staff@operationcode.org?subject=Sponsor Meetup"
                analyticsEventLabel="Sponsor Meetup"
                className={styles.topMargin}
              >
                Become A Sponsor
              </LinkButton>
            </div>
          </div>,
        ]}
      />

      <Content
        title="Want to host us at your next event?"
        theme="gray"
        columns={[
          <p>Hosting us at events helps us:</p>,
          <div className={styles.badgeGroupings}>
            {hostEventItems.map(item => (
              <Badge
                key={item.label}
                icon={item.icon}
                label={item.label}
                className={styles.badge}
              />
            ))}
          </div>,
        ]}
      />

      <Content
        columns={[
          <div>
            <Heading text="Host Us At An Event" headingLevel={2} />

            <p className={styles.justifyAlign}>
              Not only are we working to get veterans into tech, we are also working to raise
              awareness of vets in the job market. From technical knowledge to diversity,
              we&rsquo;re not only a community of veterans, we also house a group of content experts
              in our chosen field.
            </p>

            <div className={styles.centeredText}>
              <LinkButton
                href="mailto:staff@operationcode.org?subject=Host Meetup"
                analyticsEventLabel="Host Meetup"
                className={styles.topMargin}
              >
                Host Us
              </LinkButton>
            </div>
          </div>,
          <TrackVisibility offset={VISIBILITY_OFFSET}>
            {({ isVisible }) => (
              <div className={classNames(styles.image, { [styles.showImage]: isVisible })}>
                <img
                  src={`${s3}redesign/images/molina_speaking_at_podium.jpg`}
                  alt="David Molina presents Operation Code at OSCON"
                />
              </div>
            )}
          </TrackVisibility>,
        ]}
      />

      <JoinSection />
    </div>
  );
}

export default Events;
