import React from 'react';
import Section from 'components/_common_/Section/Section';
import styles from './ColorsSection.css';

const ColorsSection = () => (
  <Section title="Color" theme="white">
    <div className={styles.colorPalette}>
      <h5>PRIMARY PALETTE</h5>
      <div className={styles.colorImages}>
        <img
          src="https://s3.amazonaws.com/operationcode-assets/branding/colors/blue-color-palette.png"
          alt="Primary Blue Color Palette"
        />
        <p>
          BLUE
          <br />
          #249CBC
        </p>
      </div>
      <div className={styles.colorImages}>
        <img
          src="https://s3.amazonaws.com/operationcode-assets/branding/colors/red-color-palette.png"
          alt="Primary Red Color Palette"
        />
        <p>
          RED
          <br />
          #D1665A
        </p>
      </div>
      <div className={styles.colorImages}>
        <img
          src="https://s3.amazonaws.com/operationcode-assets/branding/colors/slate-color-palette.png"
          alt="Primary Slate Color Palette"
        />
        <p>
          SLATE
          <br />
          #47566B
        </p>
      </div>
    </div>
    <div className={styles.colorPalette}>
      <h5>TINTS</h5>
      <div className={styles.colorImages}>
        <img
          src="https://s3.amazonaws.com/operationcode-assets/branding/colors/grey-color-palette.png"
          alt="Primary Grey Color Palette"
        />
        <p>
          GREY
          <br />
          #9BAAB5
        </p>
      </div>
      <div className={styles.colorImages}>
        <img
          src="https://s3.amazonaws.com/operationcode-assets/branding/colors/light-grey-color-palette.png"
          alt="Primary Light Grey Color Palette"
        />
        <p>
          LIGHT GREY
          <br />
          #D0D5DA
        </p>
      </div>
      <div className={styles.colorImages}>
        <img
          src="https://s3.amazonaws.com/operationcode-assets/branding/colors/mist-color-palette.png"
          alt="Primary Mist Color Palette"
        />
        <p>
          MIST
          <br />
          #F0F2F2
        </p>
      </div>
    </div>
  </Section>
);

export default ColorsSection;
