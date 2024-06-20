import { s3 } from 'common/constants/urls';
import Image from 'next/legacy/image';
import styles from './PressPhotos.module.css';

export function PressPhotos() {
  return (
    <div className={styles.photos}>
      <Image
        src={`${s3}photo_code-conference-la.jpg`}
        alt="David Molina speaks to Code Conference LA 2016 attendees."
        width={500}
        height={500}
      />
      <Image
        src={`${s3}photo_red-hat-summit-1.jpg`}
        alt="Operation Code members pose at Red Hat Summit 2017"
        width={500}
        height={500}
      />
      <Image
        src={`${s3}photo_node-summit.jpg`}
        alt="Conrad Hollomon presents in front of the Node Summit 2016 audience."
        width={500}
        height={500}
      />
      <Image
        src={`${s3}photo_angelhack-boston.jpg`}
        alt="Operation Code developers pose at AngelHack Boston 2017."
        width={500}
        height={500}
      />
      <Image
        src={`${s3}photo_utah-meetup.jpg`}
        alt="Ken Collier leads a discussion at the Utah Operation Code meetup."
        width={500}
        height={500}
      />
    </div>
  );
}
