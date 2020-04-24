import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import get from 'lodash/get';
import isNumber from 'lodash/isNumber';
import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Pagination from 'components/Pagination/Pagination';
import ResourceCard from 'components/Cards/ResourceCard/ResourceCard';
import { getResourcesPromise } from 'common/constants/api';
import styles from '../styles/resources.module.css';

function ResourcesPage() {
  const router = useRouter();
  const { pathname, query } = router;
  const currentPage = parseInt(query.page, 10);

  if (!isNumber(currentPage)) {
    // TODO: Handle situation where user tried some funny business, like `/resources/fuck-you`
    throw new Error(`'currentPage' is not a number`);
  }

  const [isLoading, setIsLoading] = useState(true);
  const [resources, setResources] = useState([]);
  const [totalPages, setTotalPages] = useState(currentPage);

  useEffect(() => {
    getResourcesPromise({ page: query.page })
      .then(response => {
        const fetchedResources = get(response, 'data.data', []);
        const fetchedNumberOfPages = get(response, 'data.number_of_pages', 0);

        if (fetchedResources.length === 0 || fetchedNumberOfPages === 0) {
          // TODO: set state for variable which conditionally renders "No resources" view
          return;
        }

        setResources(fetchedResources);
        setTotalPages(fetchedNumberOfPages);
        setIsLoading(false);
      })
      .catch(error => {
        // TODO: Do something with erroror state
        console.log('error', error);
        setIsLoading(false);
      });

    return () => {
      setIsLoading(true);
    };
  }, [query]);

  return (
    <>
      <Head title="Resources" />
      <HeroBanner title="Resources" className="smallHero" />
      <Content
        theme="white"
        columns={[
          <section className={styles.fullWidth}>
            {isLoading ? (
              <p style={{ margin: '2rem auto', textAlign: 'center' }}>
                {/* TODO: Create with skeleton loading screen to avoid jank between routing */}
                Loading...
              </p>
            ) : (
              <>
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

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  pathname={pathname}
                  query={query}
                />
              </>
            )}
          </section>,
        ]}
      />
    </>
  );
}

export default ResourcesPage;
