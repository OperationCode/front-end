/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import get from 'lodash/get';
import isNumber from 'lodash/isNumber';
import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Pagination from 'components/Pagination/Pagination';
import ResourceCard from 'components/Cards/ResourceCard/ResourceCard';
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

  /* TODO: work on a way to handle /resources/<not a number> */

  console.log(!!currentPage.toString().match(/^([^0-9]*)$/));
  console.log(!isNumber(currentPage));

  // useEffect(() => {
  //   if (currentPage.toString().match(/^([^0-9]*)$/)) {
  //     console.log(`currentPage is ${currentPage}`);
  //     router.push({ pathname: `/resources/1`, query: router.query });
  //     setErrorMessage(
  //       'Invalid page number. Entries after the forward slash (/) must be a number. eg https://operationcode.org/resources/1',
  //     );
  //   }
  // }, []);

  // error/loading control
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // flow control
  const [resources, setResources] = useState([]);
  const [totalPages, setTotalPages] = useState(currentPage);

  // categories
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // languages
  const [allLanguages, setAllLanguages] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  useEffect(() => {
    Promise.all([getResourcesByCategories(), getResourcesByLanguages()])
      .then(([categoriesResponse, languagesResponse]) => {
        const {
          data: { data: categoriesData },
        } = categoriesResponse;
        const {
          data: { data: languagesData },
        } = languagesResponse;

        setAllLanguages(
          languagesData.map(language => {
            return {
              value: language.name.replace(/ /g, '-').toLowerCase(),
              label: language.name,
            };
          }),
        );
        setCategories(
          categoriesData.map(category => {
            return {
              value: category.name.replace(/ /g, '-').toLowerCase(),
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
    const { page, category, languages, q } = query;
    if (category || (q && Object.values(category || q).length)) {
      return getResourcesBySearch({ page, category, languages, q });
    }
    if (languages && Object.values(languages).length) {
      return getResourcesPromise({ page, category, languages, q });
    }
    return getResourcesBySearch({ page, category, languages, q });
  };

  useEffect(() => {
    /* TODO: 
    need some sort of handler to know when to use the resources api 
    vs when to use the search api for rn i just hardcode to test */
    handleEndpoint()
      .then(response => {
        const fetchedResources = get(response, 'data.data', []);
        const fetchedNumberOfPages = get(response, 'data.number_of_pages', 0);

        if (fetchedResources.length === 0 || fetchedNumberOfPages === 0) {
          /* TODO: set state for variable which conditionally renders "No resources" view */
          return;
        }

        setResources(fetchedResources);
        setTotalPages(fetchedNumberOfPages);
        setIsLoading(false);
      })
      .catch(error => {
        // TODO: Do something with erroror state
        console.log('error', error);
        setErrorMessage('There was an error gathering those resources.');
        setIsLoading(false);
      });

    return () => {
      setIsLoading(true);
    };
  }, [query]);

  const updateQuery = newQueryObject => {
    setErrorMessage(null);
    const { page } = query;
    const relevantQueryStringObject = omit(query, ['page']);

    router.push(
      {
        pathname,
        query: { page, ...newQueryObject },
      },
      { pathname: pathname.replace('[page]', '1'), query: relevantQueryStringObject },
    );
  };

  const handleSearch = userInput => {
    updateQuery(userInput);
  };

  const handleCategory = category => {
    const { label } = category;
    setSelectedCategory(label);
    updateQuery({ category: label });
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
            ,
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
            ,
            {isLoading ? (
              <>
                {/* TODO: Create with skeleton loading screen to avoid jank between routing */}
                {/* below is just a temp fix for my own sanity */}

                <div className={styles.resourcesCardWrapper}>
                  {allLanguages.map(language => (
                    <>
                      <ResourceCard
                        key={language.name}
                        description=""
                        downvotes={0}
                        upvotes={0}
                        href=""
                        name="A rather long loading title"
                        className={styles.skeletonItem}
                      />
                    </>
                  ))}
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
