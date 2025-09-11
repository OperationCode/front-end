import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import Badge from 'components/Badge/Badge';
import Card from 'components/Cards/Card/Card';
import FlatCard from 'components/Cards/FlatCard/FlatCard';
import LinkButton from 'components/Buttons/LinkButton/LinkButton';
import SponsorsSection from 'components/ReusableSections/SponsorsSection/SponsorsSection';
import MedalSolid from 'static/images/icons/FontAwesome/medal-solid.svg';

const pageTitle = 'Corporate Sponsorship';

function Sponsorship() {
  return (
    <div>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} className="min-h-[60dvh]">
        <LinkButton href="/donate" theme="primary" className="mt-4">
          Donate Now
        </LinkButton>
      </HeroBanner>

      <Content
        title="Become A Corporate Sponsor Today"
        theme="white"
        hasTitleUnderline
        columns={[
          <p>
            Operation Code is pleased to invite America&apos;s leading technology companies to
            become shared value sponsors. Please join us and help make our mission a success.
            Together, we will create a new and secure future for today&apos;s veterans and military
            spouses.
          </p>,
        ]}
      />

      <Content
        title="What We Offer"
        theme="secondary"
        columns={[
          <FlatCard>
            The largest national volunteer service organization devoted to software engineering.
          </FlatCard>,
          <FlatCard>
            Direct and indirect access to military veterans and spouses for surveying or hiring
            purposes.
          </FlatCard>,
          <FlatCard>
            Potential partnerships with national and local meetups. Help us create a community at a
            city near you.
          </FlatCard>,
          <FlatCard>
            An authentic and vibrant community. Your sponsorship will have a very noticeable and
            organic impact.
          </FlatCard>,
        ]}
      />

      <Content
        title="Engagement Opportunities"
        theme="white"
        hasTitleUnderline
        columns={[
          <Card className="justify-start max-w-[350px] h-[250px]">
            <h6>Employee Engagement</h6>
            <p>
              Provide opportunities for software engineers to mentor new learners and contribute to
              open source projects. Engage with veterans and military spouse employees in your
              organization - share their story; loud and proud.
            </p>
          </Card>,
          <Card className="justify-start max-w-[350px] h-[250px]">
            <h6>Talent Management</h6>
            <p>
              Build a talent pipeline between your company and transitioning service members with
              technical skills and security clearances. Our community is skilled, motivated, and
              diverse - they will bolster any workforce.
            </p>
          </Card>,
          <Card className="justify-start max-w-[350px] h-[250px]">
            <h6>Marketing</h6>
            <p>
              Marketing opportunities for national online and local community engagement Community
              activation opportunities and online recognition via social media and long-form
              content.
            </p>
          </Card>,
        ]}
      />

      <Content
        title="Corporate Partner Opportunities"
        theme="secondary"
        columns={[
          <div>
            <Badge
              className="text-2xl font-medium mt-6"
              icon={<MedalSolid className="text-[#ffaa22]" />}
              label="Gold Sponsor"
            />
            <p className="px-8">
              National benefits include branding recognition in national Slack community, open
              source program sponsorship, national employee engagement activities, plus all above.
            </p>
            <Badge
              className="text-2xl font-medium mt-6"
              icon={<MedalSolid className="text-silver" />}
              label="Silver Sponsor"
            />
            <p className="px-8">
              Three local chapter sponsorships of choice, complete with marketing, employee
              engagement and talent pipeline opportunities, plus all above.
            </p>
            <Badge
              className="text-2xl font-medium mt-6"
              icon={<MedalSolid className="text-[#cd7f32]" />}
              label="Bronze Sponsor"
            />
            <p className="px-8">
              Sponsor one chapter and support your local Operation Code community for the year,
              including events, training, and networking opportunities.
            </p>
          </div>,
        ]}
      />

      <SponsorsSection />
    </div>
  );
}

export default Sponsorship;
