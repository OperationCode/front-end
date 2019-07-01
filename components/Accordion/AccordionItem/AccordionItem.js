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
    <div className={styles.accordionSingle}>
      <input className={styles.accordionSingleHidden} type="checkbox" id={titleID} />

      <label className={styles.accordionSingleQuestion} htmlFor={titleID}>
        {title}
      </label>

      <p className={styles.accordionSingleAnswer}>{content}</p>
    </div>
  );
}

export default AccordionItem;
