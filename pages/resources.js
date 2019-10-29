import PropTypes from 'prop-types';
import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';

import ResourceCard from 'components/Cards/ResourceCard/ResourceCard';
import Pagination from 'components/Pagination/Pagination';
import { getResourcesPromise } from 'common/constants/api';
import styles from './resources.css';

const ResourcesContent = ({ resources, currentPage, totalPages }) => {
  // For local development, only do server-side data fetching because of CSRF policy
  const resourceMarkup = resources.map(resource => (
    <ResourceCard
      description={resource.notes}
      downvotes={resource.downvotes}
      upvotes={resource.upvotes}
      href={resource.url}
      name={resource.name}
    />
  ));

  return (
    <div>
      <div className={styles.resourcesWrapper}>{resourceMarkup}</div>
      <div>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

const ResourceType = PropTypes.shape({
  notes: PropTypes.string, // possibly null
  url: PropTypes.string.isRequired,
  name: PropTypes.title,
  upvotes: PropTypes.number,
  downvotes: PropTypes.number,
});

ResourcesContent.propTypes = {
  resources: PropTypes.arrayOf(ResourceType).isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

const ResourcesPage = ({ resources, currentPage, totalPages }) => {
  return (
    <>
      <Head title="Resources" />
      <HeroBanner title="Resources" className="smallHero" />
      <Content
        theme="white"
        columns={[
          <section>
            <ResourcesContent
              resources={resources}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </section>,
        ]}
      />
    </>
  );
};

ResourcesPage.propTypes = {
  resources: PropTypes.arrayOf(ResourceType),
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
};

ResourcesPage.defaultProps = {
  resources: [],
  currentPage: 1, // 1 indexed
  totalPages: 1,
};

ResourcesPage.getInitialProps = async () => {
  const response = await getResourcesPromise();
  const { data: resources, number_of_pages: totalPages, page: currentPage } = response.data;
  return {
    resources,
    currentPage,
    totalPages,
  };
};

export default ResourcesPage;
