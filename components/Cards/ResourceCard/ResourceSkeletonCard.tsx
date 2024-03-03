// import { number } from 'prop-types';
import { SKELETON_CARD } from '../../../common/constants/testIDs';
import styles from './ResourceSkeletonCard.module.css';

// ResourceSkeletonCard.propTypes = {
//   numberOfSkeletons: number.isRequired,
// };

export type ResourceSkeletonCardPropsType = {
  numberOfSkeletons: number;
};

function ResourceSkeletonCard({ numberOfSkeletons }: ResourceSkeletonCardPropsType) {
  return (
    <div className={styles.resourcesCardWrapper}>
      {[...Array(numberOfSkeletons)].map((skeleton, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div data-testid={SKELETON_CARD} key={index} className={styles.Skeleton}>
          <div className={styles.loading}>
            <div className={styles.skeletonInner} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResourceSkeletonCard;
