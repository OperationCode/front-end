import React from 'react';
import { string, node } from 'prop-types';
import styles from './AccordionItem.css';

AccordionItem.propTypes = {
  title: string.isRequired,
  content: node.isRequired,
};

function AccordionItem({ title, content }) {
  // Create an HTML-safe ID for input query selecting
  const titleID = title.replace(/[.,/#!?@#$%^&*;:{}=\-_'`~()]/g, '').replace(/\s{2,}/g, ' ');

  return (
    <div className={styles.accordion}>
      <input className={styles.accordionHidden} type="checkbox" id={titleID} />

      <label className={styles.accordionTitle} htmlFor={titleID}>
        {title}
      </label>

      <p className={styles.accordionContent}>{content}</p>
    </div>
  );
}

export default AccordionItem;
