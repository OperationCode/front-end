/* eslint-disable no-console */
import { useState, useEffect } from 'react'; // eslint-disable-line  no-restricted-imports
import PropTypes from 'prop-types';
import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import ResourceCard from 'components/Cards/ResourceCard/ResourceCard';
import Pagination from 'components/Pagination/Pagination';
import { Field, Formik } from 'formik';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import { getResourcesPromise, searchResourcesPromise } from 'common/constants/api';
import styles from '../styles/resources.module.css';

ResourcesPage.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pathname: PropTypes.string.isRequired,
  query: PropTypes.object,
  defaultResources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number, // integer, unique ID
      name: PropTypes.title,
      notes: PropTypes.string, // possibly null
      url: PropTypes.string.isRequired,
      upvotes: PropTypes.number,
      downvotes: PropTypes.number,
    }),
  ).isRequired,
  defaultTotalPages: PropTypes.number.isRequired,
};

ResourcesPage.defaultProps = {
  query: { page: 1 },
};

ResourcesPage.getInitialProps = async ({ pathname, query, asPath }) => {
  const response = asPath.includes('search')
    ? await searchResourcesPromise(query)
    : await getResourcesPromise(query);

  const {
    data: defaultResources,
    number_of_pages: defaultTotalPages,
    page: currentPage,
  } = response.data;

  return {
    currentPage,
    pathname,
    defaultResources,
    defaultTotalPages,
    query,
  };
};

function ResourcesPage({ currentPage, pathname, defaultResources, defaultTotalPages, query }) {
  const [currentQuery, setCurrentQuery] = useState(query);
  const [currentResources, setCurrentResources] = useState(defaultResources);
  const [currentTotalPages, setCurrentTotalPages] = useState(defaultTotalPages);

  console.log('currentQuery is:', currentQuery);

  const handleSearch = async q => {
    setCurrentQuery({ ...q, ...query });
    await searchResourcesPromise({ ...q, ...query }).then(response => {
      setCurrentResources(response.data.data);
      setCurrentTotalPages(response.data.number_of_pages);
    });
  };

  useEffect(() => {
    setCurrentResources(previousState => {
      return {
        ...previousState,
        defaultResources,
      };
    });

    setCurrentQuery(previousState => {
      return {
        ...previousState,
        page: currentPage,
      };
    });
  }, [defaultResources, currentPage]);

  return (
    <>
      <Head title="Resources" />
      <HeroBanner title="Resources" className="smallHero" />
      <Content
        theme="white"
        columns={[
          <Formik onSubmit={handleSearch}>
            <Form>
              <div className={styles.fullWidth}>
                <Field type="search" name="q" label="Search" component={Input} />
              </div>
            </Form>
          </Formik>,
          <section className={styles.fullWidth}>
            <Pagination
              currentPage={currentPage}
              totalPages={currentTotalPages}
              pathname={pathname}
              query={currentQuery}
            />
            <div className={styles.fullWidth}>
              {currentResources.map(resource => (
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
          </section>,
        ]}
      />
    </>
  );
}

export default ResourcesPage;
