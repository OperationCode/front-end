import React from 'react';
import Section from 'components/_common_/Section/Section';
import ColorBlock from './ColorBlock/ColorBlock';
import styles from './ColorSection.css';

function ColorSection() {
  return (
    <Section title="Colors" theme="grey">
      <h3>Primary Pallete</h3>
      <div className={styles.colorPalette}>
        <ColorBlock colorName="Blue" colorHex="#249CBC" />

        <ColorBlock colorName="Red" colorHex="#D1665A" />

        <ColorBlock colorName="Slate" colorHex="#47566B" />
      </div>

      <h3>Tints</h3>
      <div className={styles.colorPalette}>
        <ColorBlock colorName="Gray" colorHex="#9BAAB5" />

        <ColorBlock colorName="Light Gray" colorHex="#D0D5DA" />

        <ColorBlock colorName="Mist" colorHex="#F0F2F2" />
      </div>
    </Section>
  );
}

export default ColorSection;
