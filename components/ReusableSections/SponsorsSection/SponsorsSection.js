import React from 'react';
import Content from 'components/Content/Content';
import PartnerLogoLink from 'components/PartnerLogoLink/PartnerLogoLink';
import partners from 'common/constants/partners';

const SponsorsSection = () => (
  <Content
    title="Sponsors"
    theme="gray"
    columns={partners.map(partner => (
      <PartnerLogoLink key={partner.name} {...partner} />
    ))}
  />
);

export default SponsorsSection;
