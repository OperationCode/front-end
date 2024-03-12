import Container from 'components/Container/Container';
import Heading from 'components/Heading/Heading';
import PartnerLogoLink from 'components/PartnerLogoLink/PartnerLogoLink';
import partners, { PARTNER_TYPES } from 'common/constants/partners';

type Partner = {
  name: string;
  type: string;
};

const isPaidSponsor = (partner: Partner): boolean => partner.type === PARTNER_TYPES.PAID;

const SponsorsSection = () => (
  <Container theme="gray">
    <Heading text="Sponsors" hasTitleUnderline headingLevel={3} />

    <Heading text="Corporate Partners" headingLevel={4} />
    <p>
      These sponsors have donated cash to help keep the mission going here at Operation Code. They
      may or may not have also donated to our cause via others means.
    </p>
    <div className="flex justify-center items-center flex-wrap [&>*]:m-4">
      {partners
        .filter(x => isPaidSponsor(x))
        .map(partner => (
          <PartnerLogoLink key={partner.name} {...partner} size="large" />
        ))}
    </div>

    <Heading text="Corporate Supporters" headingLevel={4} />
    <p>
      The following organizations have helped Operation Code through services, products,
      advertisements, scholarships, or sponsorships. We thank them for their contributions.
    </p>
    <div className="flex justify-center items-center flex-wrap [&>*]:m-4">
      {partners
        .filter(x => !isPaidSponsor(x))
        .map(partner => (
          <PartnerLogoLink key={partner.name} {...partner} />
        ))}
    </div>
  </Container>
);

export default SponsorsSection;
