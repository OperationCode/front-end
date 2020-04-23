// eslint-disable-next-line no-restricted-imports
import { useState, useEffect } from 'react';
import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import ResourceCard from 'components/Cards/ResourceCard/ResourceCard';
import Pagination from 'components/Pagination/Pagination';
import { Field, Formik } from 'formik';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import { useRouter } from 'next/router';
import {
  // getResourcesCategories,
  searchResourcesPromise,
} from 'common/constants/api';
import styles from '../styles/resources.module.css';

function ResourcesPage() {
  const [resources, setResources] = useState([]);
  const [query, setQuery] = useState({});
  // const [endpoint, setEndpoint] = useState({ search: false, resources: true });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pathname, setPathname] = useState('resources/[page]');

  const router = useRouter();
  const { pageFromRouter = 1, q } = router.query;

  useEffect(() => {
    setPathname(router.pathname);
    setQuery(router.query);
  }, []);

  const handleSearch = userInput => {
    // setEndpoint({ search: true, resources: false });
    setQuery(previousQuery => {
      return {
        ...previousQuery,
        ...userInput,
      };
    });

    router.push(
      {
        pathname: `${pathname}`,
        query,
      },
      `${pathname.replace('[page]', currentPage)}?q=${q}&page=${pageFromRouter}`,
    );
  };

  useEffect(() => {
    async function updateResources() {
      const response = await searchResourcesPromise(query);
      // eslint-disable-next-line camelcase
      const { data, number_of_pages, page } = response.data;
      setResources(data);
      setTotalPages(number_of_pages);
      setCurrentPage(page);
    }
    updateResources();
  }, [query]);

  /* this one uses the routeChangeStart event.. thought I would have success with it, but no luck */

  // useEffect(() => {
  //   const handleQueryChange = async () => {
  //     const response = await searchResourcesPromise(query);
  //     console.log('query inside endpoint', query);
  //     // eslint-disable-next-line camelcase
  //     const { data, number_of_pages, page } = response.data;
  //     setResources(data);
  //     setTotalPages(number_of_pages);
  //     setCurrentPage(page);
  //   };
  //   router.events.on('routeChangeStart', handleQueryChange);
  //   return () => {
  //     router.events.off('routeChangeStart', handleQueryChange);
  //   };
  // }, [query]);

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
            {resources && !!resources.length && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                pathname={pathname}
                query={q}
              />
            )}
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

// ResourcesPage.getInitialProps = async ({ pathname, query }) => {
//   const { q = null, page } = query;
//   /* eventually need some sort of handler to decide which api call to use */
//   const response = !query.search
//     ? await searchResourcesPromise(query)
//     : await getResourcesPromise(query);
//   console.log('configURL=', response.config.url);
//   console.log('QQuery', query);
//   const { data: resources, number_of_pages: totalPages, page: currentPage } = response.data;

//   return {
//     currentPage,
//     pathname,
//     resources,
//     totalPages,
//     query,
//     page,
//     q,
//   };
// };

// const handlePagination = event => {
//   event.preventDefault();
//   console.log('slow down there partner');
//   const paginationPageNumber = event.currentTarget.getAttribute('value');

//   router.push({
//     pathname: `${pathname.replace('[page]', `${paginationPageNumber}`)}`,
//     query: query.q !== null ? { q: query.q } : null,
//     shallow: true,
//   });
// };

// const handleSearch = async searchInputQuery => {
//   setInputQuery(previousState => {
//     return {
//       ...previousState,
//       ...searchInputQuery,
//       search: 'search',
//     };
//   });
//   setCurrentRoute('search');

//   const response = await searchResourcesPromise({ ...searchInputQuery, ...query });
//   setCurrentResources(response.data.data);
// };

// console.group(
//   `currentRoute is: ${currentRoute},
// inputQuery is`,
//   inputQuery,
// );

// ResourcesPage.propTypes = {
//   currentPage: number,
//   pathname: string,
//   query: object,
//   resources: arrayOf(
//     shape({
//       id: number, // integer, unique ID
//       name: title,
//       notes: string, // possibly null
//       url: string,
//       upvotes: number,
//       downvotes: number,
//     }),
//   ),
// };

// ResourcesPage.defaultProps = {
//   currentPage: 1,
//   pathname: null,
//   query: null,
//   resources: [],
// };
