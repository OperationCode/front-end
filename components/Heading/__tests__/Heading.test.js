import React from 'react';

import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Heading from '../Heading';

describe('Heading', () => {
  afterEach(cleanup);

  it('should render with required props', () => {
    createSnapshotTest(<Heading>Test</Heading>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Heading className="test-class" id="test-heading-1" hasHeadingLines={false} theme="secondary">
        Test
      </Heading>,
    );
  });
});

describe('Heading anchor and hashlink', () => {
  afterEach(cleanup);

  it('should contain the anchor class when hasHashLink is true', () => {
    const { container } = render(<Heading hasHashLink>Test</Heading>);

    expect(container.firstChild.firstChild).toHaveClass('anchor');
  });

  it('should contain the iconFillBlue class when theme is white or gray', () => {
    const reference = React.createRef();
    render(
      <Heading ref={reference} theme="white">
        Test
      </Heading>,
    );

    expect(reference.current.getVisibleIcon()).toStrictEqual('icon iconVisible iconFillBlue');
  });

  it('should contain the iconFillWhite class when theme is not white or gray', () => {
    const reference = React.createRef();
    render(
      <Heading ref={reference} theme="secondary">
        Test
      </Heading>,
    );

    expect(reference.current.getVisibleIcon()).toStrictEqual('icon iconVisible iconFillWhite');
  });

  it('should toggle isLinkIconVisible state to true or false', () => {
    const reference = React.createRef();
    render(<Heading ref={reference}>Test</Heading>);

    reference.current.toggleVisible(true);
    expect(reference.current.state.isLinkIconVisible).toBe(true);

    reference.current.toggleVisible(false);
    expect(reference.current.state.isLinkIconVisible).toBe(false);
  });

  // it('should contain anchorId without a question mark when anchorId is included', () => {
  //   const reference = React.createRef();
  //   render(<Heading ref={reference}>WANT TO BECOME A SPONSOR?</Heading>);
  //   expect(reference.current.getAnchorId()).toStrictEqual('want-to-become-a-sponsor');
  // });

  // it('should contain anchorId without exclamation mark when anchorId is included', () => {
  //   const reference = React.createRef();
  //   render(<Heading ref={reference}>JOIN TODAY!</Heading>);
  //   expect(reference.current.getAnchorId()).toStrictEqual('join-today');
  // });

  // it('should contain anchorId without a period when anchorId is included', () => {
  //   const reference = React.createRef();
  //   render(<Heading ref={reference}>Jon Doe Jr.</Heading>);
  //   expect(reference.current.getAnchorId()).toStrictEqual('jon-doe-jr');
  // });

  it('should get the headingTextWithLinkIconOffset class when hasHashLink is true', () => {
    const reference = React.createRef();
    render(
      <Heading ref={reference} hasHashLink>
        Test
      </Heading>,
    );

    expect(reference.current.getHeadingClasses()).toStrictEqual(
      'headingTextWithLinkIconOffset Heading secondary',
    );
  });

  it('should get the anchorMargin class if the customAnchorClass is empty', () => {
    const reference = React.createRef();
    render(<Heading ref={reference}>Test</Heading>);

    expect(reference.current.getAnchorClass()).toStrictEqual('anchor anchorMargin');
  });

  it('should contain a span element when hasHashLink is true', () => {
    const reference = React.createRef();
    render(
      <Heading ref={reference} hasHashLink>
        opcode
      </Heading>,
    );

    expect(reference.current.getSpan()).toStrictEqual(
      <span className="anchor anchorMargin" id="opcode" />,
    );
  });
});

describe('Heading classes', () => {
  afterEach(cleanup);

  it('should render with "secondary" in classNames when theme="secondary"', () => {
    const { container } = render(
      <Heading hasHashLink={false} theme="secondary">
        Test
      </Heading>,
    );

    expect(container.firstChild.lastChild).toHaveClass('secondary');
  });

  it('should render with "headingLines" in classNames when hasHeadingLines={true}', () => {
    const { container } = render(
      <Heading hasHashLink={false} hasHeadingLines>
        Test
      </Heading>,
    );

    expect(container.firstChild.lastChild).toHaveClass('headingLines');
  });

  it('should get default heading classes when nothing is passed', () => {
    const reference = React.createRef();
    render(<Heading ref={reference}>Test</Heading>);

    expect(reference.current.getHeadingClasses()).toStrictEqual(
      'headingTextWithLinkIconOffset Heading secondary',
    );
  });

  it('should get the headingOurMission class when passed', () => {
    const reference = React.createRef();
    render(
      <Heading ref={reference} hasHashLink={false} className="headingOurMission">
        Test
      </Heading>,
    );

    expect(reference.current.getHeadingClasses()).toStrictEqual('headingOurMission secondary');
  });
});

describe('Heading element levels', () => {
  afterEach(cleanup);

  it('should contain h1 when headingLevel is 1', () => {
    const reference = React.createRef();
    render(
      <Heading ref={reference} headingLevel={1}>
        Test
      </Heading>,
    );

    expect(reference.current.getHeading()).toStrictEqual(
      <h1 className="headingTextWithLinkIconOffset Heading secondary" id="">
        Test
      </h1>,
    );
  });

  it('should contain h2 when headingLevel is 2', () => {
    const reference = React.createRef();
    render(
      <Heading ref={reference} headingLevel={2}>
        Test
      </Heading>,
    );

    expect(reference.current.getHeading()).toStrictEqual(
      <h2 className="headingTextWithLinkIconOffset Heading secondary" id="">
        Test
      </h2>,
    );
  });

  it('should contain h3 when headingLevel is 3', () => {
    const reference = React.createRef();
    render(
      <Heading ref={reference} headingLevel={3}>
        Test
      </Heading>,
    );

    expect(reference.current.getHeading()).toStrictEqual(
      <h3 className="headingTextWithLinkIconOffset Heading secondary" id="">
        Test
      </h3>,
    );
  });

  it('should contain h4 when headingLevel is 4', () => {
    const reference = React.createRef();
    render(
      <Heading ref={reference} headingLevel={4}>
        Test
      </Heading>,
    );

    expect(reference.current.getHeading()).toStrictEqual(
      <h4 className="headingTextWithLinkIconOffset Heading secondary" id="">
        Test
      </h4>,
    );
  });

  it('should contain h5 when headingLevel is 5', () => {
    const reference = React.createRef();
    render(
      <Heading ref={reference} headingLevel={5}>
        Test
      </Heading>,
    );

    expect(reference.current.getHeading()).toStrictEqual(
      <h5 className="headingTextWithLinkIconOffset Heading secondary" id="">
        Test
      </h5>,
    );
  });

  it('should contain h6 when headingLevel is 6', () => {
    const reference = React.createRef();
    render(
      <Heading ref={reference} headingLevel={6}>
        Test
      </Heading>,
    );

    expect(reference.current.getHeading()).toStrictEqual(
      <h6 className="headingTextWithLinkIconOffset Heading secondary" id="">
        Test
      </h6>,
    );
  });
});
