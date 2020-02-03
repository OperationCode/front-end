import PropTypes from 'prop-types';
import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import ResourceCard from 'components/Cards/ResourceCard/ResourceCard';
import Pagination from 'components/Pagination/Pagination';
import { getResourcesPromise } from 'common/constants/api';
import styles from '../styles/resources.module.css';

ResourcesPage.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pathname: PropTypes.string.isRequired,
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number, // integer, unique ID
      name: PropTypes.title,
      notes: PropTypes.string, // possibly null
      url: PropTypes.string.isRequired,
      upvotes: PropTypes.number,
      downvotes: PropTypes.number,
    }),
  ).isRequired,
  totalPages: PropTypes.number.isRequired,
};

ResourcesPage.getInitialProps = async ({ pathname, query }) => {
  const { page = 1 } = query;

  const response = await getResourcesPromise({ page });

  const { data: resources, number_of_pages: totalPages, page: currentPage } = response.data;

  return {
    currentPage,
    pathname,
    resources,
    totalPages,
  };
};

function ResourcesPage({ currentPage, pathname, resources, totalPages }) {
  return (
    <>
      <Head title="Resources" />
      <HeroBanner title="Resources" className="smallHero" />
      <Content
        theme="white"
        columns={[
          <section className={styles.fullWidth}>
            <div className={styles.fullWidth}>
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

            <Pagination currentPage={currentPage} totalPages={totalPages} pathname={pathname} />
          </section>,
        ]}
      />
    </>
  );
}

export default ResourcesPage;
