import React from 'react';
import { string, node } from 'prop-types';
import styles from './FAQItem.css';

FAQItem.propTypes = {
  question: string.isRequired,
  answer: node.isRequired,
};

function FAQItem({ question, answer }) {
  // Create an HTML-safe ID for input query selecting
  const questionID = question.replace(/[.,/#!?@#$%^&*;:{}=\-_'`~()]/g, '').replace(/\s{2,}/g, ' ');

  return (
    <div className={styles.accordionSingle}>
      <input className={styles.accordionSingleHidden} type="checkbox" id={questionID} />

      <label className={styles.accordionSingleQuestion} htmlFor={questionID}>
        {question}
      </label>

      <p className={styles.accordionSingleAnswer}>{answer}</p>
    </div>
  );
}

export default FAQItem;
