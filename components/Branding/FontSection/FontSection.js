import React from 'react';
import Section from 'components/_common_/Section/Section';
import styles from './FontSection.css';

function FontSection() {
  return (
    <Section title="Fonts" theme="mist">
      <div className={styles.brandingFonts}>
        <h6>PF DIN DISPLAY PRO REGULAR</h6>
        <p className={styles.pfDinDisplay}>Sphinx of black quartz, judge my vow!</p>
        <p>&nbsp;</p>
        <h6>NOTO SERIF REGULAR</h6>
        <p className={styles.notoSerif}>Sphinx of black quartz, judge my vow!</p>
      </div>
    </Section>
  );
}

export default FontSection;
