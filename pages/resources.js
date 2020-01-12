import PropTypes from 'prop-types';
import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';

import ResourceCard from 'components/Cards/ResourceCard/ResourceCard';
import Pagination from 'components/Pagination/Pagination';
import { getResourcesPromise } from 'common/constants/api';
import styles from './styles/resources.module.css';

ResourcesPage.propTypes = {
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number, // integer, unique ID
      name: PropTypes.title,
      notes: PropTypes.string, // possibly null
      url: PropTypes.string.isRequired,
      upvotes: PropTypes.number,
      downvotes: PropTypes.number,
    }),
  ),
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
};

ResourcesPage.defaultProps = {
  resources: [],
  currentPage: 1, // 1 indexed
  totalPages: 1,
};

ResourcesPage.getInitialProps = async () => {
  const page = 1;
  const response = await getResourcesPromise(page);
  const { data: resources, number_of_pages: totalPages, page: currentPage } = response.data;
  return {
    resources,
    currentPage,
    totalPages,
  };
};

function ResourcesPage({ resources, currentPage, totalPages }) {
  return (
    <>
      <Head title="Resources" />
      <HeroBanner title="Resources" className="smallHero" />
      <Content
        theme="white"
        columns={[
          <section>
            <div className={styles.grid}>
              {resources.map(resource => (
                <ResourceCard
                  key={resource.id}
                  description={resource.notes}
                  downvotes={resource.downvotes}
                  upvotes={resource.upvotes}
                  href={resource.url || ''}
                  name={resource.name}
                  className={styles.resourceCard}
                />
              ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </section>,
        ]}
      />
    </>
  );
}

export default ResourcesPage;
