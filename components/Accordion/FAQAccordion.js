import React from 'react';
import { node, number, string, oneOfType } from 'prop-types';
import Accordion from './Accordion';
import styles from './FAQAccordion.module.css';

FAQAccordion.propTypes = {
  // required for joining elements together with aria attributes
  accessibilityId: oneOfType([number, string]).isRequired,
  content: node.isRequired,
  title: string.isRequired,
};

function FAQAccordion({ accessibilityId, content, title }) {
  return (
    <Accordion
      className={styles.FAQAccordion}
      content={{
        headingChildren: <h6>{title}</h6>,
        bodyChildren: <p>{content}</p>,
      }}
      accessibilityId={accessibilityId}
    />
  );
}

export default FAQAccordion;
