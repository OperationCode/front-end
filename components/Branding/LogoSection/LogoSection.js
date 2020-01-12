import React from 'react';
import classNames from 'classnames';
import Badge from 'components/Badge/Badge';
import Content from 'components/Content/Content';
import { s3 } from 'common/constants/urls';
import styles from './LogoSection.module.css';

function LogoSection() {
  return (
    <Content
      title="Logo"
      theme="gray"
      hasTitleUnderline
      columns={[
        <ul className={styles.logoSizeList}>
          {/* - SMALL LOGOS - */}
          <li className={classNames(styles.logoSizeListItem, styles.smallLogos)}>
            <h5>SMALL</h5>
            <p>For use when the medal is between 0 and 1-inch tall.</p>

            <ul className={styles.logoTypeList}>
              <li className={styles.logoTypeListItem}>
                <h6>TYPICAL</h6>

                <ul className={styles.badgeList}>
                  <li>
                    <Badge
                      icon={
                        <img
                          src={`${s3}branding/logos/small-blue-logo.png`}
                          alt="Small Blue Accented Logo"
                        />
                      }
                      isImageFirst={false}
                      label="Blue"
                    />
                  </li>

                  <li>
                    <Badge
                      icon={
                        <img
                          src={`${s3}branding/logos/small-red-logo.png`}
                          alt="Small Red Accented Logo"
                        />
                      }
                      isImageFirst={false}
                      label="Red"
                    />
                  </li>

                  <li>
                    <Badge
                      icon={
                        <img
                          src={`${s3}branding/logos/small-logo.png`}
                          alt="Small Unaccented Logo"
                        />
                      }
                      isImageFirst={false}
                      label="Slate"
                    />
                  </li>

                  <li>
                    <Badge
                      icon={
                        <img
                          src={`${s3}branding/logos/small-white-logo.png`}
                          alt="Small White Accented Logo"
                        />
                      }
                      isImageFirst={false}
                      label="White"
                    />
                  </li>
                </ul>
              </li>

              <li className={styles.logoTypeListItem}>
                <h6>STACKED</h6>

                <ul className={styles.badgeList}>
                  <li>
                    <Badge
                      icon={
                        <img
                          src={`${s3}branding/logos/small-stacked-logo-blue.png`}
                          alt="Stacked Small Blue Logo"
                        />
                      }
                      isImageFirst={false}
                      label="Blue"
                    />
                  </li>

                  <li>
                    <Badge
                      icon={
                        <img
                          src={`${s3}branding/logos/small-stacked-logo-red.png`}
                          alt="Stacked Small Red Logo"
                        />
                      }
                      isImageFirst={false}
                      label="Red"
                    />
                  </li>

                  <li>
                    <Badge
                      icon={
                        <img
                          src={`${s3}branding/logos/small-stacked-logo.png`}
                          alt="Stacked Unaccented Slate Logo"
                        />
                      }
                      isImageFirst={false}
                      label="Slate"
                    />
                  </li>
                </ul>
              </li>

              <li className={styles.logoTypeListItem}>
                <h6>MEDALS</h6>
                <p>
                  For use as an icon reference, when no other logo representations will fit the
                  media space.
                </p>

                <ul className={styles.badgeList}>
                  <li>
                    <Badge
                      icon={
                        <img src={`${s3}branding/logos/large-blue-medal.png`} alt="Blue Medal" />
                      }
                      isImageFirst={false}
                      label="Blue"
                    />
                  </li>

                  <li>
                    <Badge
                      icon={<img src={`${s3}branding/logos/large-red-medal.png`} alt="Red Medal" />}
                      isImageFirst={false}
                      label="Red"
                    />
                  </li>

                  <li>
                    <Badge
                      icon={
                        <img src={`${s3}branding/logos/large-slate-medal.png`} alt="Slate Medal" />
                      }
                      isImageFirst={false}
                      label="Slate"
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* - LARGE LOGOS - */}
          <li className={classNames(styles.logoSizeListItem, styles.largeLogos)}>
            <h5>LARGE</h5>
            <p>For use when the medal is above 1-inch tall.</p>

            <ul className={styles.logoTypeList}>
              <li className={styles.logoTypeListItem}>
                <h6>TYPICAL</h6>

                <ul className={styles.badgeList}>
                  <li>
                    <Badge
                      icon={
                        <img
                          src={`${s3}branding/logos/large-blue-logo.png`}
                          alt="Large Blue Accented Logo"
                        />
                      }
                      isImageFirst={false}
                      label="Blue"
                    />
                  </li>

                  <li>
                    <Badge
                      icon={
                        <img
                          src={`${s3}branding/logos/large-red-logo.png`}
                          alt="Large Red Accented Logo"
                        />
                      }
                      isImageFirst={false}
                      label="Red"
                    />
                  </li>

                  <li>
                    <Badge
                      icon={
                        <img
                          src={`${s3}branding/logos/large-logo.png`}
                          alt="Large Unaccenteded Logo"
                        />
                      }
                      isImageFirst={false}
                      label="Slate"
                    />
                  </li>

                  <li>
                    <Badge
                      icon={
                        <img
                          src={`${s3}branding/logos/large-white-logo.png`}
                          alt="Large White Accented Logo"
                        />
                      }
                      isImageFirst={false}
                      label="White"
                    />
                  </li>
                </ul>
              </li>

              <li className={styles.logoTypeListItem}>
                <h6>STACKED</h6>

                <ul className={styles.badgeList}>
                  <li>
                    <Badge
                      icon={
                        <img
                          src={`${s3}branding/logos/large-stacked-logo-blue.png`}
                          alt="Stacked Large Blue Logo"
                        />
                      }
                      isImageFirst={false}
                      label="Blue"
                    />
                  </li>

                  <li>
                    <Badge
                      icon={
                        <img
                          src={`${s3}branding/logos/large-stacked-logo-red.png`}
                          alt="Stacked Large Red Logo"
                        />
                      }
                      isImageFirst={false}
                      label="Red"
                    />
                  </li>

                  <li>
                    <Badge
                      icon={
                        <img
                          src={`${s3}branding/logos/large-stacked-logo.png`}
                          alt="Stacked Large Slate Logo"
                        />
                      }
                      isImageFirst={false}
                      label="Slate"
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>,
      ]}
    />
  );
}
export default LogoSection;
