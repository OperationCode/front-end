import classNames from 'classnames';
import Badge from 'components/Badge/Badge';
import Content from 'components/Content/Content';
import Logo from 'components/Branding/Logo/Logo';
import StackedLogo from 'components/Branding/Logo/StackedLogo';
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
              Operation Code&apos;s logo is provided as code itself. It is an SVG grouped into four
              color fill areas. SVG is appropriate to use for small and large formats where
              horizontal space is needed.
            </p>

            <ul className={styles.logoTypeList}>
              <li className={styles.logoTypeListItem}>
                <h6>TYPICAL</h6>
                <ul className={styles.badgeList}>
                  <li>
                    <Badge
                      icon={
                        <div>
                          <Logo variant="blue" />
                        </div>
                      }
                      isImageFirst={false}
                      label="Blue"
                    />
                  </li>
                  <li>
                    <Badge
                      icon={
                        <div>
                          <Logo variant="red" />
                        </div>
                      }
                      isImageFirst={false}
                      label="Red"
                    />
                  </li>
                  <li>
                    <Badge
                      isImageFirst={false}
                      label="Slate"
                      icon={
                        <div>
                          <Logo variant="slate" />
                        </div>
                      }
                    />
                  </li>
                  <li>
                    <Badge
                      icon={
                        <div>
                          <Logo variant="white" />
                        </div>
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
                        <div>
                          <StackedLogo variant="blue" />
                        </div>
                      }
                      isImageFirst={false}
                      label="Blue"
                    />
                  </li>
                  <li>
                    <Badge
                      icon={
                        <div>
                          <StackedLogo variant="red" />
                        </div>
                      }
                      isImageFirst={false}
                      label="Red"
                    />
                  </li>
                  <li>
                    <Badge
                      icon={
                        <div>
                          <StackedLogo variant="slate" />
                        </div>
                      }
                      isImageFirst={false}
                      label="Slate"
                    />
                  </li>
                  <li>
                    <Badge
                      icon={
                        <div>
                          <StackedLogo variant="white" />
                        </div>
                      }
                      isImageFirst={false}
                      label="White"
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
                      icon={<Logo medalOnly variant="blue" />}
                      isImageFirst={false}
                      label="Blue"
                    />
                  </li>
                  <li>
                    <Badge
                      icon={<Logo medalOnly variant="red" />}
                      isImageFirst={false}
                      label="Red"
                    />
                  </li>
                  <li>
                    <Badge
                      icon={<Logo medalOnly variant="slate" />}
                      isImageFirst={false}
                      label="Slate"
                    />
                  </li>
                  <li>
                    <Badge
                      icon={<Logo medalOnly variant="white" />}
                      isImageFirst={false}
                      label="White"
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
