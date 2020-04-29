/* eslint-disable no-console */
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import get from 'lodash/get';
import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Pagination from 'components/Pagination/Pagination';
import ResourceCard from 'components/Cards/ResourceCard/ResourceCard';
import ResourceSkeletonCard from 'components/Cards/ResourceCard/ResourceSkeletonCard';
import {
  getResourcesPromise,
  getResourcesByCategories,
  getResourcesByLanguages,
  getResourcesBySearch,
} from 'common/constants/api';
import { Field, Formik } from 'formik';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import omit from 'lodash/omit';
import styles from '../styles/resources.module.css';
import ThemedReactSelect from '../../components/Form/Select/ThemedReactSelect';
import Alert from '../../components/Alert/Alert';

function ResourcesPage() {
  const router = useRouter();
  const { pathname, query } = router;
  const currentPage = parseInt(query.page, 10);

  // eslint-disable-next-line camelcase
  const { page, category, languages, paid, updatedAfter: updated_after, q } = query;

  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [resources, setResources] = useState([]);
  const [totalPages, setTotalPages] = useState(currentPage);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const [allLanguages, setAllLanguages] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const componentIsMounted = useRef(false);

  useEffect(() => {
    componentIsMounted.current = true;
    Promise.all([getResourcesByCategories(), getResourcesByLanguages()])
      .then(([categoriesResponse, languagesResponse]) => {
        const {
          data: { data: categoriesData },
        } = categoriesResponse;
        const {
          data: { data: languagesData },
        } = languagesResponse;
        console.log('updatig resource');
        setAllLanguages(
          languagesData.map(language => {
            return {
              value: language.name.replace(/ /g, ' ').toLowerCase(),
              label: language.name,
            };
          }),
        );
        setCategories(
          // eslint-disable-next-line no-shadow
          categoriesData.map(category => {
            return {
              value: category.name.replace(/ /g, ' ').toLowerCase(),
              label: category.name,
            };
          }),
        );
      })

      .catch(error => {
        console.warn(`There was an error trying to fetch the initial resources.: ${error}`);
        setErrorMessage('There was an error finding these resources.');
      });
  }, []);

  const handleEndpoint = () => {
    if (q) {
      return getResourcesBySearch({ page, q });
    }
    if (languages || category) {
      return getResourcesPromise({ page, category, languages, paid, updated_after });
    }
    return getResourcesBySearch({ page, q });
  };
  console.log(currentPage, componentIsMounted.current);
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(currentPage) && componentIsMounted.current) {
      // eslint-disable-next-line no-restricted-globals
      console.log(isNaN(currentPage));
      setTotalPages(1);
      setResources([]);
      setIsLoading(false);
      setErrorMessage(
        `Invalid page number. All search input after /resources/
        must be a number value, EG .../resources/1`,
      );
    } else {
      handleEndpoint()
        .then(response => {
          const fetchedResources = get(response, 'data.data', []);
          const fetchedNumberOfPages = get(response, 'data.number_of_pages', 0);

          if (fetchedResources.length === 0 || fetchedNumberOfPages === 0) {
            /* TODO: set state for variable which conditionally renders "No resources" view */
            return;
          }

          setResources(fetchedResources);
          if (q) {
            setTotalPages(fetchedNumberOfPages - 1);
          } else {
            setTotalPages(fetchedNumberOfPages);
          }

          setIsLoading(false);
        })
        .catch(error => {
          console.warn(error);
          setErrorMessage('There was an error gathering those resources.');
          setIsLoading(false);
        });

      return () => {
        setIsLoading(true);
      };
    }
  }, [query]);

  const updateQuery = newQueryObject => {
    setErrorMessage(null);
    const relevantQueryStringObject = omit(query, ['page']);

    /* I realize I can't really do this because then the query string changes on rerender 
    after changing pages etc. trying to figure out how to make it pretty in the url bar 
    without uriencoded characters */

    // const formatQueryStringObject = () => {
    //   const slugifiedArray = Object.entries(query).map(value => [
    //     [value[0]],
    //     value[1].replace(' ', '-'),
    //   ]);
    //   const slugifiedObject = Object.fromEntries(slugifiedArray);
    //   const relevantQueryStringObject = omit(slugifiedObject, ['page']);
    //   return relevantQueryStringObject;
    // };

    router.push(
      {
        pathname,
        query: { page, ...newQueryObject },
      },
      {
        pathname: pathname.replace('[page]', '1'),
        query: relevantQueryStringObject,
      },
    );
  };

  const handleSearch = userInput => {
    updateQuery(userInput);
  };

  // eslint-disable-next-line no-shadow
  const handleCategory = category => {
    const { value } = category;
    setSelectedCategory(value);
    updateQuery({ category: value });
  };

  const handleLanguages = language => {
    if (!language) {
      return;
    }
    const languageValues = language && !!language.length ? language.map(lang => lang.value) : null;
    setSelectedLanguages(languageValues);
    updateQuery({ languages: languageValues });
  };

  return (
    <>
      <Head title="Resources" />
      <HeroBanner title="Resources" className="smallHero" />
      <Content
        theme="white"
        columns={[
          <section className={styles.fullWidth}>
            <div className={styles.searchContainer}>
              <h5>Search</h5>
              <Formik onSubmit={handleSearch}>
                <Form>
                  {/* TODO: there are some errors getting thrown for input component 
                  having some of its required props */}
                  <Field type="search" name="q" component={Input} />
                </Form>
              </Formik>
            </div>

            <div className={styles.selectContainer}>
              <div className={styles.selectColumn}>
                <h5>By Category</h5>
                <ThemedReactSelect
                  instanceId="category_select"
                  placeholder="Start typing a category..."
                  className={styles.select}
                  name="Categories"
                  options={categories}
                  onChange={handleCategory}
                  selected={selectedCategory}
                />
              </div>

              <div className={styles.selectColumn}>
                <h5>By Language</h5>
                <ThemedReactSelect
                  instanceId="language_select"
                  placeholder="Start typing a language..."
                  className={styles.select}
                  isMulti
                  name="Languages"
                  options={allLanguages}
                  onChange={handleLanguages}
                  selected={selectedLanguages}
                />
              </div>
            </div>

            {isLoading ? (
              <>
                {/* TODO: Create with skeleton loading screen to avoid jank between routing */}
                {/* below is just a temp fix for my own sanity */}

                <div className={styles.resourcesCardWrapper}>
                  <ResourceSkeletonCard numberOfSkeletons={10} />
                </div>
              </>
            ) : (
              <>
                {errorMessage && <Alert type="error">{`${errorMessage}`}</Alert>}
                <div className={styles.resourcesCardWrapper}>
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
                ,
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
