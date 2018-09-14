import React from 'react';
import PropTypes from 'prop-types';
import styles from './question.css';

const Question = ({ question, answer }) => (
  <div className={styles.accordionSingle}>
    <input className={styles.accordionSingleHidden} type="checkbox" id={question} />
    <label className={styles.accordionSingleQuestion} htmlFor={question}>
      {' '}
      {question}
    </label>
    {
      // eslint-disable-next-line
      <p className={styles.accordionSingleAnswer}>{answer}</p>
    }
  </div>
);

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Question;
