/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ResourceCard from '../ResourceCard';

describe('ResourceCard', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <ResourceCard
        imageSource="/static/images/icons/javascript_logo.svg"
        name="JavaScript for Dummies"
      />,
    );
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <ResourceCard
        className="test-class"
        imageSource="/static/images/icons/javascript_logo.svg"
        name="JavaScript for Dummies"
        upvotes={12}
        downvotes={25}
        description={shortDescription}
      />,
    );
  });

  it('should render properly with truncated description', () => {
    createSnapshotTest(
      <ResourceCard
        className="test-class"
        imageSource="/static/images/icons/javascript_logo.svg"
        name="JavaScript for Super Duper Dummies"
        upvotes={12}
        downvotes={25}
        description={longDescription}
      />,
    );
  });

  it('should render properly with faded up/downvotes', () => {
    createSnapshotTest(
      <ResourceCard
        className="test-class"
        imageSource="/static/images/icons/javascript_logo.svg"
        name="JavaScript for Dummies"
        upvotes={0}
        downvotes={0}
        description={shortDescription}
      />,
    );
  });
});

// eslint-disable-next-line max-len
const longDescription = `Cliche umami truffaut scenester vice bespoke. Lomo copper mug seitan raw denim tousled coloring book kinfolk irony venmo fam austin. Pitchfork vape pork belly, fixie flannel enamel pin cold-pressed echo park. Organic sriracha waistcoat austin keytar, gentrify cardigan mumblecore PBR&B tumblr normcore meggings scenester. Enamel pin kitsch butcher, synth etsy next level gluten-free. Put a bird on it vexillologist XOXO iPhone wolf coloring book chicharrones 8-bit VHS unicorn. Leggings viral taxidermy keytar, cray schlitz hot chicken kogi truffaut art party XOXO.`;

// eslint-disable-next-line max-len
const shortDescription = `Trust fund post-ironic austin offal. Asymmetrical knausgaard selfies, butcher celiac brunch brooklyn palo santo iceland gochujang chicharrones waistcoat plaid.`;
