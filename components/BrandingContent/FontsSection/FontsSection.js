import React from 'react';
import Section from 'components/_common_/Section/Section';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import styles from './FontsSection.css';

const FontsSection = () => (
  <Section title="Fonts" theme="white">
    <div className={styles.brandingFonts}>
      <h6>PF DIN DISPLAY PRO REGULAR</h6>
      <img
        src="https://s3.amazonaws.com/operationcode-assets/branding/fonts/pf-din-font.png"
        alt="PF DIN REGULAR FONT"
      />
      <p className={styles.centerText}>
        <OutboundLink
          analyticsEventLabel="Download PF Din font files"
          href="https://ocbranding.squarespace.com/s/PFDin.zip"
        >
          Download PF Din font files
        </OutboundLink>
      </p>
      <p>&nbsp;</p>
      <h6>NOTO SERIF REGULAR</h6>
      <img
        src="https://s3.amazonaws.com/operationcode-assets/branding/fonts/noto-serif-font.png"
        alt="NOTO SERIF REGULAR FONT"
      />
      <p className={styles.centerText}>
        <OutboundLink
          analyticsEventLabel="Download Noto Serif font files"
          href="https://ocbranding.squarespace.com/s/NotoSerif.zip"
        >
          Download Noto Serif font files
        </OutboundLink>
      </p>
    </div>
  </Section>
);

export default FontsSection;
