import { SKELETON_CARD } from '../../../common/constants/testIDs';
import styles from './ResourceSkeletonCard.module.css';

export type ResourceSkeletonCardPropsType = {
  /**
   * Sets the number of UI "skeletons" to render.
   */
  numberOfSkeletons: number;
};

function ResourceSkeletonCard({ numberOfSkeletons }: ResourceSkeletonCardPropsType) {
  return (
    <div className={styles.resourcesCardWrapper}>
      {[...Array(numberOfSkeletons)].map((_skeleton, index) => (
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
