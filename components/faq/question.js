import React from 'react';
import PropTypes from 'prop-types';
import styles from './question.css';

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.node.isRequired,
};

function Question({ question, answer }) {
  return (
    <div className={styles.accordionSingle}>
      <input className={styles.accordionSingleHidden} type="checkbox" id={question} />
      
      <label className={styles.accordionSingleQuestion} htmlFor={question}>
        {question}
      </label>
      
      <p className={styles.accordionSingleAnswer}>{answer}</p>
    </div>
  );
}

export default Question;
