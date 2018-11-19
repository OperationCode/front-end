import React from 'react';
import Section from 'components/_common_/Section/Section';
import styles from './FontSection.css';

function FontSection() {
  // Every letter of the alphabet in one string
  const demoText = 'Sphinx of black quartz, judge my vow!';

  return (
    <Section title="Fonts" theme="gray">
      <ul className={styles.fontsList}>
        <li className={styles.primaryFontFamily}>
          <div>
            <h6>PF Din Display Pro Regular</h6>
            <p>{demoText}</p>
          </div>
        </li>

        <li className={styles.secondaryFontFamily}>
          <div>
            <h6>Noto Serif Regular</h6>
            <p>{demoText}</p>
          </div>
        </li>
      </ul>
    </Section>
  );
}

export default FontSection;
