import React from 'react';
import Section from 'components/_common_/Section/Section';
import { brandColorsObject } from 'common/styles/styleExports';
import ColorBlock from './ColorBlock/ColorBlock';
import styles from './ColorsSection.css';

const ColorsSection = () => (
  <Section title="Colors" theme="white">
    <h5>PRIMARY PALETTE</h5>
    <div className={styles.colorPalette}>
      <ColorBlock colorName="Blue" colorHex={brandColorsObject.primary} />
    </div>
    <h5>SECONDARY</h5>
    <div className={styles.colorPalette}>
      <ColorBlock colorName="Red" colorHex={brandColorsObject.secondary} />
    </div>
    <h5>OTHERS</h5>
    <div className={styles.colorPalette}>
      <ColorBlock colorName="Mist" colorHex={brandColorsObject.mist} />
      <ColorBlock colorName="Slate" colorHex={brandColorsObject.slate} />
      <ColorBlock colorName="Gray" colorHex={brandColorsObject.gray} />
      <ColorBlock colorName="Navy" colorHex={brandColorsObject.navy} />
    </div>
  </Section>
);

export default ColorsSection;
