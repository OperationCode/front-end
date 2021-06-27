import { number } from 'prop-types';
import { SKELETON_CARD } from '../../../common/constants/testIDs';
import styles from './ResourceSkeletonCard.module.css';

ResourceSkeletonCard.propTypes = {
  numberOfSkeletons: number.isRequired,
};

function ResourceSkeletonCard({ numberOfSkeletons }) {
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
