/* eslint-disable no-console */
// import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import ResourceCard from 'components/Cards/ResourceCard/ResourceCard';
import Pagination from 'components/Pagination/Pagination';
import { Field, Formik } from 'formik';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import {
  // getResourcesPromise,
  // getResourcesCategories,
  searchResourcesPromise,
} from 'common/constants/api';
import { useRouter } from 'next/router';
import styles from '../styles/resources.module.css';

ResourcesPage.propTypes = {
  currentPage: PropTypes.number,
  pathname: PropTypes.string.isRequired,
  query: PropTypes.object.isRequired,
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

ResourcesPage.defaultProps = {
  currentPage: 1,
};

ResourcesPage.getInitialProps = async ({ pathname, query }) => {
  const { page = 1, q = null } = query;
  /* eventually need some sort of handler to decide which api call to use */
  const response = await searchResourcesPromise(query);
  console.log(response);
  const { data: resources, number_of_pages: totalPages, page: currentPage } = response.data;

  return {
    currentPage,
    pathname,
    resources,
    totalPages,
    query,
    page,
    q,
  };
};

function ResourcesPage({ currentPage = 1, pathname, resources, totalPages, query }) {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   getResourcesCategories().then(response => {
  //     console.log(response.data);
  //   });
  // }, []);

  const router = useRouter();

  const handlePagination = event => {
    event.preventDefault();
    console.log('slow down there partner');
    const paginationPageNumber = event.currentTarget.getAttribute('value');

    router.push({
      pathname: `${pathname.replace('[page]', `${paginationPageNumber}`)}`,
      query: query.q !== null ? { q: query.q } : null,
      shallow: true,
    });
  };

  const handleSearch = async searchInputQuery => {
    router.push({
      pathname: `${pathname.replace('[page]', `${currentPage}`)}`,
      query: { ...searchInputQuery },
      shallow: true,
    });
  };

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
              currentPage={currentPage + 1}
              totalPages={totalPages}
              pathname={pathname}
              handlePagination={handlePagination}
            />
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
          </section>,
        ]}
      />
    </>
  );
}

export default ResourcesPage;

/* i think this is because the searchResources starts on page 0... */

// Error: The value passed for currentPage is 0. "currentPage" cannot be less than 1.
// Pagination
// ./components/Pagination/Pagination.js:149
//   146 |   const errorMessage = `${developmentErrors.currentPageValue(currentPage)} ${
//   147 |     developmentErrors.currentPageTooSmall
//   148 |   }`;
// > 149 |   throw new Error(errorMessage);
//       | ^  150 | }
//   151 |
//   152 | const isCurrentPageTooBig = currentPage > totalPages;

// For the initial page load, getInitialProps will run on the server only.
// getInitialProps will then run on the client when navigating to a different route via
// the next/link component or by using next/router.
