import React from 'react';
import { brandColorsObject } from 'common/styles/styleExports';
import Swatch from 'components/Branding/Swatch/Swatch';
import Section from 'components/_common_/Section/Section';
import styles from './ColorSection.css';

function ColorSection() {
  // TODO: Name our primary and secondary colors
  const primaryColor = { name: 'Primary', hexCode: brandColorsObject.primary };
  const secondaryColor = { name: 'Secondary', hexCode: brandColorsObject.secondary };

  // Compose a list of colors excluding primary and secondary
  const otherColorNames = Object.keys(brandColorsObject).filter(colorName => {
    const isPrimary = colorName === 'primary';
    const isSecondary = colorName === 'secondary';

    return !isPrimary && !isSecondary;
  });

  return (
    <Section title="Colors" theme="white" contentClassName={styles.ColorSection}>
      <div className={styles.mainColors}>
        <div className={styles.colorGrouping}>
          <h3>Primary</h3>
          <Swatch colorName={primaryColor.name} hexCode={primaryColor.hexCode} />
        </div>

        <div className={styles.colorGrouping}>
          <h3>Secondary</h3>
          <Swatch colorName={secondaryColor.name} hexCode={secondaryColor.hexCode} />
        </div>
      </div>

      <h3>Other On-Brand Colors</h3>
      <div className={styles.otherColors}>
        {otherColorNames.map(colorName => (
          <Swatch colorName={colorName} hexCode={brandColorsObject[colorName]} key={colorName} />
        ))}
      </div>
    </Section>
  );
}

export default ColorSection;
