import React from 'react';
import Section from 'components/_common_/Section/Section';
import { fontsObject } from 'common/styles/styleExports';
import styles from './FontSection.css';

function FontSection() {
  // Every letter of the alphabet in one string
  const demoText = 'Sphinx of black quartz, judge my vow!';

  return (
    <Section title="Fonts" theme="mist">
      <ul className={styles.fontsList}>
        {Object.keys(fontsObject).map(item => {
          const fontStyle = {
            fontFamily: fontsObject[item],
          };
          return (
            <li key={item}>
              <div>
                <h6 style={fontStyle}>{fontsObject[item]}</h6>
                <p style={fontStyle}>{demoText}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

export default FontSection;
