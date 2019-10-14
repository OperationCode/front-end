import Link from 'next/link';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import ImageCard from 'components/Cards/ImageCard/ImageCard';
import ValueCard from 'components/Cards/ValueCard/ValueCard';
import { s3 } from 'common/constants/urls';
import styles from './styles/about.css';

export default () => (
  <>
    <Head title="About" />

    <HeroBanner
      backgroundImageSource={`${s3}redesign/heroBanners/about.jpg`}
      title="About Us"
      className={styles.hero}
    />

    <Content
      theme="white"
      columns={[
        <>
          <p className={styles.justifyAlign}>
            <b>
              Operation Code is a non-profit charity helping the military community learn software
              development, enter the tech industry, and code the future.
            </b>
          </p>

          <p className={styles.justifyAlign}>
            We at Operation Code strive to provide an efficient way into a tech career for veterans
            and their families. We work directly with Senators, Congressmen, and Congresswomen to
            allow veterans total control of their future by permitting the use of the GI Bill on
            coding bootcamps. We also have a page where you can read about our{' '}
            <Link href="/history">
              <a>organization&apos;s history</a>
            </Link>
            .
          </p>

          <p className={styles.justifyAlign}>
            Aside from our work on the Hill, we offer many services to the military community and
            are continuing to expand our offerings as often as possible. First and foremost, our
            staff works tirelessly to provide mentorship for veterans interested in learning about
            various tech careers. Dozens of software engineers, product managers, system architects,
            security engineers, and various other IT professionals act as 1 - on - 1 mentors to all
            of our members. We also have a hardware loan program to help veterans in need of a
            laptop!
          </p>

          <p className={styles.justifyAlign}>
            As a non - profit organization, we rely heavily on your support. If you are interested
            in helping us financially, please donate here or set your Amazon Smile organization to
            &ldquo;Operation Code&rdquo;. If you have questions about our organization, platforms,
            or services, please reference our FAQ page. Otherwise, do not hesitate to reach out to
            our staff.
          </p>
        </>,
      ]}
    />

    <Content
      theme="secondary"
      title="What We Do"
      hasTitleUnderline
      columns={[
        <ImageCard
          alt="Two women pair programming"
          className={styles.imageCard}
          imageSource={`${s3}stock_paired-programming.jpg`}
        >
          <h6>Mentorship Program</h6>
          <p>
            Operation Code&apos;s mentorship program connects members with seasoned software
            developers to help you progress and achieve your goals.
          </p>
        </ImageCard>,
        <ImageCard
          alt="Man working on laptop"
          className={styles.imageCard}
          imageSource={`${s3}stock_laptop-working.jpg`}
        >
          <h6>Code School Scholarships</h6>
          <p>
            Operation Code&apos;s code school scholarships provide you the opportunity to kickstart
            your career in software development.
          </p>
        </ImageCard>,
        <ImageCard
          alt="Team of people working together at a coffee table"
          className={styles.imageCard}
          imageSource={`${s3}stock_teamwork-1.jpg`}
        >
          <h6>Career Services</h6>
          <p>
            Operation Code&apos;s career services team provides job opportunities, resume reviews,
            technical interview prep, and career guidance.
          </p>
        </ImageCard>,
        <ImageCard
          alt="Operation Code members pose together at Red Hat Summit 2017"
          className={styles.imageCard}
          imageSource={`${s3}photo_red-hat-summit-2.jpg`}
        >
          <h6>Conference Scholarships</h6>
          <p>
            Operation Code partners with tech conferences around the country and offers scholarship
            tickets to events throughout the year.
          </p>
        </ImageCard>,
        <ImageCard
          alt="Operation Code Seattle Meet-up In 2017"
          className={styles.imageCard}
          imageSource={`${s3}photo_oc-seattle-meetup.jpg`}
        >
          <h6>Community Events</h6>
          <p>
            Join one of our{' '}
            <Link href="/events">
              <a>local meetup chapters</a>
            </Link>{' '}
            throughout the country, and learn with fellow members of the military community.
          </p>
        </ImageCard>,
        <ImageCard
          alt="A pair of orange headphones resting on a laptop keyboard"
          className={styles.imageCard}
          imageSource={`${s3}headphones.jpg`}
        >
          <h6>Podcast</h6>
          <p>
            <Link href="/podcast">
              <a>We have a podcast!</a>
            </Link>{' '}
            You can listen into the amazing stories of our members. Visualize your success through
            others&apos; footsteps.
          </p>
        </ImageCard>,
      ]}
    />

    <Content
      theme="white"
      title="Mission"
      hasTitleUnderline
      columns={[
        <p className={styles.justifyAlign}>
          Operation Code is leading the way to expand opportunities for military veterans and their
          families. We aim to help veterans learn new skills and build their careers in the
          fast-growing technology sector. Our team’s mission - led by veterans and other dedicated,
          passionate volunteers - is to help open doors for our diverse member base through unique
          program offerings, such as our Software Mentor Program, conference scholarships, and
          employment services. All of this is made possible by individual donations and corporate
          partnerships.
        </p>,
      ]}
    />

    <Content
      theme="gray"
      title="Core Values"
      hasTitleUnderline
      columns={[
        <ValueCard
          name="Integrity"
          description="We hold ourselves accountable for obtaining results
            that fulfill our Mission and work towards our Vision.
            As leaders, we are responsible for what we do, or fail to do.
            We act consistently with Operation Code's mission, being honest
            in what we do and say, and accept responsibility for our collective
            and individual actions."
        />,
        <ValueCard
          name="Transparency"
          description="By being transparent in everything Operation Code does,
            from our open source code base to our financial operations, our
            community can trust that we will do our best with the resources we're given."
        />,
        <ValueCard
          name="Agility"
          description="We run fast and we run lean. When our operating environment changes,
            and new challenges emerge, we're ready to respond. We communicate as early and as
            often as possible, and default to overcommunication in all of our interactions.
            We always look for a better, more effective, and more efficient way to run our
            operations."
        />,
        <ValueCard
          name="Curiosity"
          description="Innovation is central to our mindset. We maintain an attitude of
            continuous improvement, and we constantly look for new and better ways to
            serve our community - we owe them nothing less."
        />,
        <ValueCard
          name="Responsibility"
          description="We exist to meet the needs of the military community.
            We will humbly remember that their service was of the highest order and
            that Operation Code works for them. When it comes to the welfare and
            well-being of our community, the buck stops here."
        />,
        <ValueCard
          name="Clarity"
          description="In the words of the US Army Signal Corps, we get the
            message through. We ensure that we are clear and concise in how we
            communicate, in support of our operations. We are considerate of the
            sender and the receiver, and communicate in the manner that best suits
            the needs of the mission and the vision."
        />,
        <ValueCard
          name="Community"
          description="We look out for the people to our left and right,
            and always keep a hand free to help. We listen to our community
            and our people to ensure we are working towards the mission and the vision."
        />,
      ]}
    />
  </>
);
