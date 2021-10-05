import { s3 } from 'common/constants/urls';
import styles from './PressPhotos.module.css';

function PressPhotos() {
  return (
    <div className={styles.photos}>
      <img
        src={`${s3}photo_code-conference-la.jpg`}
        alt="David Molina speaks to Code Conference LA 2016 attendees."
      />
      <img
        src={`${s3}photo_red-hat-summit-1.jpg`}
        alt="Operation Code members pose at Red Hat Summit 2017"
      />
      <img
        src={`${s3}photo_node-summit.jpg`}
        alt="Conrad Hollomon presents in front of the Node Summit 2016 audience."
      />
      <img
        src={`${s3}photo_angelhack-boston.jpg`}
        alt="Operation Code developers pose at AngelHack Boston 2017."
      />
      <img
        src={`${s3}photo_utah-meetup.jpg`}
        alt="Ken Collier leads a discussion at the Utah Operation Code meetup."
      />
    </div>
  );
}

export default PressPhotos;
