import classNames from 'classnames';
import TrackVisibility from 'react-on-screen';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import LinkButton from 'components/_common_/LinkButton/LinkButton';
import Heading from 'components/_common_/Heading/Heading';
import Badge from 'components/Badge/Badge';
import Content from 'components/Content/Content';
import JoinSection from 'components/ReusableSections/JoinSection/JoinSection';
import FlatCard from 'components/Cards/FlatCard/FlatCard';
import Carousel from 'nuka-carousel';
import BookIcon from 'static/images/icons/FontAwesome/book-solid.svg';
import UtensilsIcon from 'static/images/icons/FontAwesome/utensils-solid.svg';
import BuildingIcon from 'static/images/icons/FontAwesome/building_icon.svg';
import BullhornIcon from 'static/images/icons/FontAwesome/bullhorn-solid.svg';
import LeftAngleIcon from 'static/images/icons/FontAwesome/angle-left-solid.svg';
import RightAngleIcon from 'static/images/icons/FontAwesome/angle-right-solid.svg';
import UserIcon from 'static/images/icons/FontAwesome/user-solid.svg';
import DiversityIcon from 'static/images/icons/FontAwesome/users-solid.svg';
import { s3 } from 'common/constants/urls';
import styles from './styles/events.css';

const VISIBILITY_OFFSET = 400;

const sponsorItems = [
  {
    icon: <BookIcon />,
    label: 'Education Materials',
  },
  {
    icon: <BuildingIcon />,
    label: 'Workspaces for Meetups',
  },
  {
    icon: <UtensilsIcon />,
    label: 'Food for Longer Meetups',
  },
];

const hostEventItems = [
  {
    icon: <BullhornIcon />,
    label: 'Raise Awareness',
  },
  {
    icon: <DiversityIcon />,
    label: 'Add Diversity to Conventions',
  },
  {
    icon: <UserIcon />,
    label: 'Get Our Voices out There',
  },
];

const carouselItems = [
  {
    label: 'OpCode North Carolina: Durham',
    date: '10/06/2018',
  },
  {
    label: 'Hacktober',
    date: '10/01/2018',
  },
  {
    label: 'OpCode Boston',
  },
  {
    label: 'OpCode North Carolina: Durham',
    date: '10/06/2018',
  },
  {
    label: 'Hacktober',
    date: '10/01/2018',
  },
  {
    label: 'OpCode Boston',
  },
  {
    label: 'OpCode North Carolina: Durham',
    date: '10/06/2018',
  },
];

export default () => {
  const pageTitle = 'Events';

  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} backgroundImageSource={`${s3}redesign/heroBanners/events.jpg`}>
        <>
          <p>
            Need more Operation Code in your life? From conventions to tech meetups, we are where
            you are! There are 4,000+ members across more than 20 states!
          </p>

          <LinkButton href="#">See Locations</LinkButton>
        </>
      </HeroBanner>

      <Content
        title="Upcoming Events:"
        theme="gray"
        columns={[
          <p className={styles.eventsLeadText}>
            Be sure to check back often or join your local meetup for a more up to date list of
            meetups or engagements
          </p>,
        ]}
      />

      <div className={styles.eventsCarousel}>
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
      </div>

      <HeroBanner
        backgroundImageSource={`${s3}redesign/heroBanners/events.jpg`}
        className={styles.meetupCardsBanner}
      >
        <div className={styles.meetupCardsRow}>
          <div className={styles.col}>
            <FlatCard className={styles.meetupCard}>
              <span className={styles.meetupCardHeader}>Find Your Local Meetup</span>

              <div className={styles.meetupCardCta}>
                <LinkButton href="#">Locations</LinkButton>
              </div>
            </FlatCard>
          </div>

          <div className={styles.col}>
            <FlatCard className={styles.meetupCard}>
              <span className={styles.meetupCardHeader}>Start a Meetup in Your Area</span>

              <div className={styles.meetupCardCta}>
                <LinkButton href="#">Find Out How</LinkButton>
              </div>
            </FlatCard>
          </div>

          <div className={styles.col}>
            <FlatCard className={styles.meetupCard}>
              <span className={styles.meetupCardHeader}>Donate to Your Local Meetup</span>

              <div className={styles.meetupCardCta}>
                <LinkButton href="#">Find Out How</LinkButton>
              </div>
            </FlatCard>
          </div>
        </div>
      </HeroBanner>

      <Content
        title="Want to Become a Sponsor?"
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
                <img src={`${s3}redesign/images/woman.jpg`} alt="Woman smiling at computer" />
              </div>
            )}
          </TrackVisibility>,
          <div>
            <Heading hasHeadingLines={false} theme="white">
              Sponsor a Meetup
            </Heading>

            <p>
              From classes, to hackathons, to contributions to our open source projects. Our meetups
              are just one way we engage with our veterans and our community. Wanna help out? Find
              out how you can sponsor us, from food, to educational materials, and a space for us to
              meet.
            </p>

            <div className={styles.centeredText}>
              <LinkButton href="/mentor">Become A Mentor</LinkButton>
            </div>
          </div>,
        ]}
      />

      <Content
        title="Ways You Can Support Operation Code"
        theme="gray"
        columns={[
          <p>Sponsoring a meetup ensures we have access to:</p>,
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
            <Heading hasHeadingLines={false} theme="white">
              Host Us at an Event
            </Heading>

            <p>
              Not only are we working to get veterans into tech, we are also working to raise
              awareness of vets in the job market. From technical knowledge to diversity,
              we&rsquo;re not only a community of veterans, we also house a group of content experts
              in our chosen field.
            </p>

            <div className={styles.centeredText}>
              <LinkButton href="/mentor">Become A Mentor</LinkButton>
            </div>
          </div>,
          <TrackVisibility offset={VISIBILITY_OFFSET}>
            {({ isVisible }) => (
              <div className={classNames(styles.image, { [styles.showImage]: isVisible })}>
                <img src={`${s3}redesign/images/woman.jpg`} alt="Woman smiling at computer" />
              </div>
            )}
          </TrackVisibility>,
        ]}
      />

      <JoinSection />
    </>
  );
};
