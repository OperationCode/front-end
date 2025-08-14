import { s3 } from 'common/constants/urls';
import Image from 'next/image';
import { cx } from 'common/utils/cva';

const pressPhotos = [
  {
    src: `${s3}photo_code-conference-la.jpg`,
    alt: 'David Molina speaks to Code Conference LA 2016 attendees.',
  },
  {
    src: `${s3}photo_red-hat-summit-1.jpg`,
    alt: 'Operation Code members pose at Red Hat Summit 2017',
  },
  {
    src: `${s3}photo_node-summit.jpg`,
    alt: 'Conrad Hollomon presents in front of the Node Summit 2016 audience',
  },
  {
    src: `${s3}photo_angelhack-boston.jpg`,
    alt: 'Operation Code developers pose at AngelHack Boston 2017.',
    className: 'object-top',
  },
  {
    src: `${s3}photo_utah-meetup.jpg`,
    alt: 'Ken Collier leads a discussion at the Utah Operation Code meetup.',
  },
];

function PressPhotos() {
  return (
    <div className="pt-4 flex flex-wrap mx-auto items-center justify-center gap-4">
      {pressPhotos.map(photo => (
        <div key={photo.src} className="relative aspect-video h-80">
          <Image
            src={photo.src}
            alt={photo.alt}
            layout="fill"
            className={cx('object-cover', photo.className)}
          />
        </div>
      ))}
    </div>
  );
}

export default PressPhotos;
