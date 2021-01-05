import React from 'react';
import { brandColorsObject } from 'common/styles/styleExports';
import Swatch from 'components/Branding/Swatch/Swatch';
import Content from 'components/Content/Content';
import styles from './ColorSection.module.css';

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
    <>
      <Content
        title="Colors"
        hasTitleUnderline
        theme="white"
        columns={[
          <div>
            <h3 className={styles.centeredText}>Primary</h3>
            <Swatch colorName={primaryColor.name} hexCode={primaryColor.hexCode} />
          </div>,
          <div>
            <h3 className={styles.centeredText}>Secondary</h3>
            <Swatch colorName={secondaryColor.name} hexCode={secondaryColor.hexCode} />
          </div>,
        ]}
      />
      <Content
        title="Other On-Brand Colors"
        theme="white"
        columns={otherColorNames.map(colorName => (
          <Swatch colorName={colorName} hexCode={brandColorsObject[colorName]} key={colorName} />
        ))}
      />

      <Content
        title="Primary Color Palette"
        hasTitleUnderlinetheme="gray"
        columns={[
          <div>
            <h3 className={styles.centeredText}>OC Light Blue</h3>
            <Swatch colorName={primaryColor.name} hexCode="#3ED6F0"/>
          </div>,
          <div>
            <h3 className={styles.centeredText}>Navy</h3>
            <Swatch colorName={primaryColor.name} hexCode="#252E3E"/>
          </div>,
          <div>
            <h3 className={styles.centeredText}>Off-White</h3>
            <Swatch colorName={primaryColor.name} hexCode="#F7F7F7"/>
          </div>,
          <div>
            <h3 className={styles.centeredText}>Light Grey</h3>
            <Swatch colorName={primaryColor.name} hexCode="#CCCCCC"/>
          </div>,
          <div>
            <h3 className={styles.centeredText}>Black</h3>
            <Swatch colorName={primaryColor.name} hexCode="#000000"/>
          </div>
        ]} 
      />

      <Content
       title="Secondary Color Palette"
       hasTitleUnderlinetheme="white"
       columns={[
         <div>
           <h3 className={styles.centeredText}>OC Red</h3>
           <Swatch colorname={secondaryColor.name} hexCode="#D1665A"/>
         </div>,
         <div>
           <h3 className={styles.centeredText}>Slate</h3>
           <Swatch colorName={secondaryColor.name} hexCode="#3F566D"/>
         </div>,
         <div>
           <h3 className={styles.centeredText}>Dark Grey</h3>
           <Swatch colorName={secondaryColor.name} hexCode="#666666"/>
         </div>
       ]}
      />
    </>
  );
}

export default ColorSection;
