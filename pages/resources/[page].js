import { arrayOf, number, shape, string } from 'prop-types';
import { getResourcesPromise } from 'common/constants/api';
import { logAndCaptureError } from 'common/utils/error-utils';
import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import ResourceCard from 'components/Cards/ResourceCard/ResourceCard';
import Pagination from 'components/Pagination/Pagination';
import styles from '../styles/resources.module.css';

ResourcesPage.propTypes = {
  currentPage: number.isRequired,
  pathname: string.isRequired,
  resources: arrayOf(
    shape({
      id: number, // integer, unique ID
      name: string,
      notes: string, // possibly null
      url: string.isRequired,
      upvotes: number,
      downvotes: number,
    }),
  ).isRequired,
  totalPages: number.isRequired,
};

ResourcesPage.getInitialProps = async ({ pathname, query }) => {
  const { page = 1 } = query;

  try {
    const response = await getResourcesPromise({ page });

    const { data: resources, number_of_pages: totalPages, page: currentPage } = response.data;

    return {
      currentPage,
      pathname,
      resources,
      totalPages,
    };
  } catch (error) {
    logAndCaptureError(error);

    return { currentPage: 1, data: [], totalPages: 1, pathname };
  }
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
