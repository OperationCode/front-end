import React from 'react';
import Content from 'components/Content/Content';
import { fontsObject } from 'common/styles/styleExports';
import styles from './FontSection.module.css';

function FontSection() {
  // Every letter of the alphabet in one string
  const demoText = 'Sphinx of black quartz, judge my vow!';

  return (
    <Content
      title="Fonts"
      theme="gray"
      hasTitleUnderline
      columns={[
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
        </ul>,
      ]}
    />
  );
}

export default FontSection;
