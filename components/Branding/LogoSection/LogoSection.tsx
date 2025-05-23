import classNames from 'classnames';
import Badge from 'components/Badge/Badge';
import Content from 'components/Content/Content';
import { s3 } from 'common/constants/urls';
import Image from 'next/image';
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
            <h5 className="text-center">Small Logos</h5>
            <p className="mx-auto">
              For use when Operation Code&apos;s logo name is between 0-1 inch in height. In most
              cases, use the Original Small Logo. The Stacked Small Logo is to be used where
              graphics needs are larger in vertical height than horizontal width with the Operation
              Code logo name still under 1 inch in height.
            </p>

            <ul className={styles.logoTypeList}>
              <li className={styles.logoTypeListItem}>
                <h6 className="text-center">TYPICAL</h6>
                <ul className={styles.badgeList}>
                  <li>
                    <Badge
                      icon={
                        <Image
                          src={`${s3}branding/logos/small-blue-logo.png`}
                          alt="Small Blue Accented Logo"
                          width={318}
                          height={60}
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
                          src={`${s3}branding/logos/small-red-logo.png`}
                          alt="Small Red Accented Logo"
                          width={318}
                          height={60}
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
                          src={`${s3}branding/logos/small-logo.png`}
                          alt="Small Unaccented Logo"
                          width={318}
                          height={60}
                        />
                      }
                      isImageFirst={false}
                      label="Slate"
                    />
                  </li>
                  <li>
                    <Badge
                      icon={
                        <Image
                          src={`${s3}branding/logos/small-white-logo.png`}
                          alt="Small White Accented Logo"
                          width={318}
                          height={60}
                        />
                      }
                      isImageFirst={false}
                      label="White"
                    />
                  </li>
                </ul>
              </li>

              <li className={styles.logoTypeListItem}>
                <h6 className="text-center">Stacked Logos</h6>
                <p className="mx-auto">
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
                <h6 className="text-center">Medals</h6>
                <p className="mx-auto">
                  Use the following medals when you are prompted to upload a thumbnail logo only or
                  profile photo. In most cases, use the OC Blue Medal. The Red Medal should only be
                  used for holidays and special events (such as Thanksgiving, fall, or Christmas).
                  The Navy Medal should be used memorandums or lighter bright colored backgrounds.
                </p>

                <ul className={styles.badgeList}>
                  <li>
                    <Badge
                      icon={
                        <Image
                          src={`${s3}branding/logos/large-blue-medal.png`}
                          alt="OC Blue Medal"
                          width={300}
                          height={404}
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
                          src={`${s3}branding/logos/large-red-medal.png`}
                          alt="Red Medal"
                          width={300}
                          height={404}
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
                          src={`${s3}branding/logos/large-slate-medal.png`}
                          alt="Navy Medal"
                          width={300}
                          height={404}
                        />
                      }
                      isImageFirst={false}
                      label="Navy"
                    />
                  </li>
                </ul>
              </li>

              <li className={styles.logoTypeListItem}>
                <h6 className="text-center">Badges</h6>
                <p className="mx-auto">
                  You may also use badges as a profile photo or thumbnail. Badges should be used to
                  accompany corporate sponsors or alliance partnerships on shared branding. Use the
                  original OC Blue Badge in most cases, except the Red Badge for special events and
                  holidays (Thanksgiving, fall and Christmas). The Navy Badge may be used with light
                  backgrounds and bright colored backgrounds.
                </p>
                <ul className={styles.badgeList}>
                  <li>
                    <Badge
                      icon={
                        <Image
                          src={`${s3}branding/logos/large-blue-medal.png`}
                          alt="OC Blue Badge"
                          width={300}
                          height={404}
                        />
                      }
                      isImageFirst={false}
                      label="OC Blue Badge"
                    />
                  </li>

                  <li>
                    <Badge
                      icon={
                        <Image
                          src={`${s3}branding/logos/large-red-medal.png`}
                          alt="Red Badge"
                          width={300}
                          height={404}
                        />
                      }
                      isImageFirst={false}
                      label="Red Badge"
                    />
                  </li>

                  <li>
                    <Badge
                      icon={
                        <Image
                          src={`${s3}branding/logos/large-slate-medal.png`}
                          alt="Navy"
                          width={300}
                          height={404}
                        />
                      }
                      isImageFirst={false}
                      label="Navy Badge"
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* - LARGE LOGOS - */}
          <li className={classNames(styles.logoSizeListItem, styles.largeLogos)}>
            <h5 className="text-center">Large Logos</h5>
            <p className="mx-auto">
              Use the Original Large Logo in almost all cases above 1 inch in height. The Red Large
              Logo is to be used in special events (such as Thanksgiving, fall or Christmas), and
              the Light Large Logo is to be used with dark backgrounds or bright colored
              backgrounds.
            </p>

            <ul className={styles.logoTypeList}>
              <li className={styles.logoTypeListItem}>
                <h6 className="text-center">TYPICAL</h6>

                <ul className={styles.badgeList}>
                  <li>
                    <Badge
                      icon={
                        <Image
                          src={`${s3}branding/logos/large-blue-logo.png`}
                          alt="Original Large Logo"
                          width={384}
                          height={70}
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
                          src={`${s3}branding/logos/large-red-logo.png`}
                          alt="Red Large Logo"
                          width={384}
                          height={70}
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
                          src={`${s3}branding/logos/large-logo.png`}
                          alt="Large Unaccented Logo"
                          width={384}
                          height={70}
                        />
                      }
                      isImageFirst={false}
                      label="Slate"
                    />
                  </li>

                  <li>
                    <Badge
                      icon={
                        <Image
                          src={`${s3}branding/logos/large-white-logo.png`}
                          alt="Large White Accented Logo"
                          width={384}
                          height={70}
                        />
                      }
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
