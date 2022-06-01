import classNames from 'classnames';
import Badge from 'components/Badge/Badge';
import Content from 'components/Content/Content';
import { s3 } from 'common/constants/urls';
import Image from 'next/image';
import Logo from 'components/Branding/Logo/Logo';
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
            <h5>Logos</h5>
            <p>
              {/* eslint-disable-next-line max-len */}
              Operation Code&apos;s logo is provided as code itself. It is an SVG grouped into four
              color fill areas. SVG is appropriate to use for small and large formats where
              horizontal space is needed.
            </p>

            <ul className={styles.logoTypeList}>
              <li className={styles.logoTypeListItem}>
                <h6>TYPICAL</h6>
                <ul className={styles.badgeList}>
                  <li>
                    <Badge icon={<Logo />} isImageFirst={false} label="Blue" />
                  </li>
                  <li>
                    <Badge
                      icon={
                        <Logo
                          operationFill={() => {
                            return { dark: '#45576a', light: '#45576a' };
                          }}
                          codeFill={() => {
                            return { dark: '#d1665a', light: '#d1665a' };
                          }}
                        />
                      }
                      isImageFirst={false}
                      label="Red"
                    />
                  </li>
                  <li>
                    <Badge
                      icon={
                        <Logo
                          operationFill={() => {
                            return { dark: '#e2e2e2', light: '#45576a' };
                          }}
                          codeFill={() => {
                            return { dark: '#e2e2e2', light: '#45576a' };
                          }}
                          medalFill={() => {
                            return { dark: '#e2e2e2', light: '#45576a' };
                          }}
                        />
                      }
                      isImageFirst={false}
                      label="Slate"
                    />
                  </li>
                  <li>
                    <Badge
                      icon={
                        <Logo
                          operationFill={() => {
                            return { dark: '#e2e2e2', light: '#f7f7f7' };
                          }}
                          codeFill={() => {
                            return { dark: '#e2e2e2', light: '#f7f7f7' };
                          }}
                          medalFill={() => {
                            return { dark: '#e2e2e2', light: '#f7f7f7' };
                          }}
                          starFill={() => {
                            return { dark: '#e2e2e2', light: '#e2e2e2' };
                          }}
                        />
                      }
                      isImageFirst={false}
                      label="White"
                    />
                  </li>
                </ul>
              </li>

              <li className={styles.logoTypeListItem}>
                <h6>Stacked Logos</h6>
                <p>
                  Use the Large Stacked Original logo in areas where you have more vertical space
                  than horizontal. Only use the Red Stacked Logo for special holidays such as
                  Thanksgiving, fall events, and Christmas. The Light Stacked Logo is to be used
                  with dark or contrasting bright colored backgrounds.
                </p>
                <ul className={styles.badgeList}>
                  <li>
                    <Badge
                      icon={
                        <Image
                          src={`${s3}branding/logos/small-stacked-logo-blue.png`}
                          alt="Large Stacked Original"
                          width={270}
                          height={226}
                        />
                      }
                      isImageFirst={false}
                      label="Blue"
                    />
                  </li>
                  <li>
                    <Badge
                      icon={
                        <Image
                          src={`${s3}branding/logos/small-stacked-logo-red.png`}
                          alt="Red Stacked Logo"
                          width={270}
                          height={226}
                        />
                      }
                      isImageFirst={false}
                      label="Red"
                    />
                  </li>
                  <li>
                    <Badge
                      icon={
                        <Image
                          src={`${s3}branding/logos/small-stacked-logo.png`}
                          alt="Light Stacked Logo"
                          width={270}
                          height={226}
                        />
                      }
                      isImageFirst={false}
                      label="Slate"
                    />
                  </li>
                </ul>
              </li>

              <li className={styles.logoTypeListItem}>
                <h6>Medals</h6>
                <p>
                  Use the following medals when you are prompted to upload a thumbnail logo only or
                  profile photo. In most cases, use the OC Blue Medal. The Red Medal should only be
                  used for holidays and special events (such as Thanksgiving, fall, or Christmas).
                  The Navy Medal should be used memorandums or lighter bright colored backgrounds.
                </p>

                <ul className={styles.badgeList}>
                  <li>
                    <Badge
                      icon={
                        <Logo
                          markOnly
                          medalFill={() => {
                            return { dark: '#3ED6F0', light: '#3ED6F0' };
                          }}
                          starFill={() => {
                            return { dark: '#f7f7f7', light: '#f7f7f7' };
                          }}
                        />
                      }
                      isImageFirst={false}
                      label="Blue"
                    />
                  </li>
                  <li>
                    <Badge
                      icon={
                        <Logo
                          markOnly
                          medalFill={() => {
                            return { dark: '#d1665a', light: '#d1665a' };
                          }}
                          starFill={() => {
                            return { dark: '#f7f7f7', light: '#f7f7f7' };
                          }}
                        />
                      }
                      isImageFirst={false}
                      label="Red"
                    />
                  </li>
                  <li>
                    <Badge
                      icon={
                        <Logo
                          markOnly
                          medalFill={() => {
                            return { dark: '#45576a', light: '#45576a' };
                          }}
                          starFill={() => {
                            return { dark: '#f7f7f7', light: '#f7f7f7' };
                          }}
                        />
                      }
                      isImageFirst={false}
                      label="Navy"
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
