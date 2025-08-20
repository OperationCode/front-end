import { cx } from 'common/utils/cva';
import Badge from 'components/Badge/Badge';
import Content from 'components/Content/Content';
import { s3 } from 'common/constants/urls';
import Image from 'next/image';

const smLogos = [
  { img: 'small-blue-logo.png', alt: 'Small Blue Accented Logo', label: 'Blue' },
  { img: 'small-red-logo.png', alt: 'Small Red Accented Logo', label: 'Red' },
  { img: 'small-logo.png', alt: 'Small Unaccented Logo', label: 'Slate' },
  { img: 'small-white-logo.png', alt: 'Small White Accented Logo', label: 'White' },
];

const stackedLogos = [
  { img: 'small-stacked-logo-blue.png', alt: 'Large Stacked Original', label: 'Blue' },
  { img: 'small-stacked-logo-red.png', alt: 'Red Stacked Logo', label: 'Red' },
  { img: 'small-stacked-logo.png', alt: 'Light Stacked Logo', label: 'Slate' },
];

const medalsOrBadges = [
  { img: 'large-blue-medal.png', alt: 'OC Blue', label: 'OC Blue' },
  { img: 'large-red-medal.png', alt: 'Red', label: 'Red' },
  { img: 'large-slate-medal.png', alt: 'Navy', label: 'Navy' },
];

const lgLogos = [
  { img: 'large-blue-logo.png', alt: 'Original Large Logo', label: 'Blue' },
  { img: 'large-red-logo.png', alt: 'Red Large Logo', label: 'Red' },
  { img: 'large-logo.png', alt: 'Large Unaccented Logo', label: 'Slate' },
  { img: 'large-white-logo.png', alt: 'Large White Accented Logo', label: 'White' },
];

function LogoSection() {
  const badgeListClassNames =
    'flex justify-around items-center flex-wrap pb-4 border-b border-solid border-slate-400';
  return (
    <Content
      title="Logo"
      theme="gray"
      hasTitleUnderline
      columns={[
        <ul className="space-y-4">
          {/* - SMALL LOGOS - */}
          <li>
            <h5 className="text-center">Small Logos</h5>
            <p className="mx-auto my-4">
              For use when Operation Code&apos;s logo name is between 0-1 inch in height. In most
              cases, use the Original Small Logo. The Stacked Small Logo is to be used where
              graphics needs are larger in vertical height than horizontal width with the Operation
              Code logo name still under 1 inch in height.
            </p>

            <ul className="space-y-4">
              <li>
                <h6 className="text-center">TYPICAL</h6>
                <ul className={badgeListClassNames}>
                  {smLogos.map(logo => (
                    <li key={logo.label}>
                      <Badge
                        icon={
                          <Image
                            src={`${s3}branding/logos/${logo.img}`}
                            alt={logo.alt}
                            width={318}
                            height={60}
                          />
                        }
                        isImageFirst={false}
                        label={logo.label}
                      />
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h6 className="text-center">Stacked Logos</h6>
                <p className="mx-auto my-4">
                  Use the Large Stacked Original logo in areas where you have more vertical space
                  than horizontal. Only use the Red Stacked Logo for special holidays such as
                  Thanksgiving, fall events, and Christmas. The Light Stacked Logo is to be used
                  with dark or contrasting bright colored backgrounds.
                </p>
                <ul className={badgeListClassNames}>
                  {stackedLogos.map(logo => (
                    <li key={logo.label}>
                      <Badge
                        icon={
                          <Image
                            src={`${s3}branding/logos/${logo.img}`}
                            alt={logo.alt}
                            width={270}
                            height={226}
                          />
                        }
                        isImageFirst={false}
                        label={logo.label}
                      />
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <h6 className="text-center">Medals</h6>
                <p className="mx-auto my-4">
                  Use the following medals when you are prompted to upload a thumbnail logo only or
                  profile photo. In most cases, use the OC Blue Medal. The Red Medal should only be
                  used for holidays and special events (such as Thanksgiving, fall, or Christmas).
                  The Navy Medal should be used memorandums or lighter bright colored backgrounds.
                </p>

                <ul className={badgeListClassNames}>
                  {medalsOrBadges.map(medal => (
                    <li key={medal.label}>
                      <Badge
                        icon={
                          <Image
                            src={`${s3}branding/logos/${medal.img}`}
                            alt={`${medal.alt} Medal`}
                            width={300}
                            height={404}
                          />
                        }
                        isImageFirst={false}
                        label={medal.label}
                      />
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <h6 className="text-center">Badges</h6>
                <p className="mx-auto my-4">
                  You may also use badges as a profile photo or thumbnail. Badges should be used to
                  accompany corporate sponsors or alliance partnerships on shared branding. Use the
                  original OC Blue Badge in most cases, except the Red Badge for special events and
                  holidays (Thanksgiving, fall and Christmas). The Navy Badge may be used with light
                  backgrounds and bright colored backgrounds.
                </p>
                <ul className={badgeListClassNames}>
                  {medalsOrBadges.map(badge => (
                    <li key={badge.label}>
                      <Badge
                        icon={
                          <Image
                            src={`${s3}branding/logos/${badge.img}`}
                            alt={`${badge.alt} Badge`}
                            width={300}
                            height={404}
                          />
                        }
                        isImageFirst={false}
                        label={`${badge.label} Badge`}
                      />
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </li>

          {/* - LARGE LOGOS - */}
          <li>
            <h5 className="text-center">Large Logos</h5>
            <p className="mx-auto my-4">
              Use the Original Large Logo in almost all cases above 1 inch in height. The Red Large
              Logo is to be used in special events (such as Thanksgiving, fall or Christmas), and
              the Light Large Logo is to be used with dark backgrounds or bright colored
              backgrounds.
            </p>

            <ul>
              <li>
                <h6 className="text-center">TYPICAL</h6>
                <ul className={cx(badgeListClassNames, 'flex-col flex-nowrap')}>
                  {lgLogos.map(logo => (
                    <li key={logo.label}>
                      <Badge
                        icon={
                          <Image
                            src={`${s3}branding/logos/${logo.img}`}
                            alt={logo.alt}
                            width={384}
                            height={70}
                          />
                        }
                        isImageFirst={false}
                        label={logo.label}
                      />
                    </li>
                  ))}
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
