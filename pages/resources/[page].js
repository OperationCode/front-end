import { useEffect, useState } from 'react';
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
  const { page, category, languages, paid, q } = query;
  const currentPage = parseInt(page, 10);

  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [resources, setResources] = useState([]);
  const [totalPages, setTotalPages] = useState(currentPage);

  const [allCategories, setAllCategories] = useState([]);
  const [allLanguages, setAllLanguages] = useState([]);

  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const costOptions = [
    { label: 'Paid', value: true },
    { label: 'Free', value: false },
  ];

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
          languagesData.map(languageObject => {
            return {
              value: languageObject.name.replace(/ /g, ' ').toLowerCase(),
              label: languageObject.name,
            };
          }),
        );
        setAllCategories(
          categoriesData.map(categoryObject => {
            return {
              value: categoryObject.name.replace(/ /g, ' ').toLowerCase(),
              label: categoryObject.name,
            };
          }),
        );
      })
      .catch(() => {
        setErrorMessage('There was an error finding these resources.');
      });
  }, []);

  const handleEndpoint = () => {
    if (q || paid) {
      return getResourcesBySearch({ page, q, paid });
    }
    if (languages || category) {
      return getResourcesPromise({ page, category, languages, paid });
    }
    return getResourcesBySearch({ page, q, paid });
  };

  useEffect(() => {
    setErrorMessage(null);

    // eslint-disable-next-line no-restricted-globals
    if (isNaN(currentPage)) {
      setResources([]);
      setIsLoading(false);
      setTotalPages(1);
      setErrorMessage(
        `${page} is an invalid page number. Pages must be numbers, EG https://operationcode.org/resources/1`,
      );
      return;
    }
    handleEndpoint()
      .then(response => {
        const fetchedResources = get(response, 'data.data', []);
        const fetchedNumberOfPages = get(response, 'data.number_of_pages', 0);

        if (fetchedResources.length === 0 || fetchedNumberOfPages === 0) {
          /* TODO: set state for variable which conditionally renders "No resources" view */
          /* this wont ever run because of the response from the server is blank on 404s */
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
      .catch(() => {
        setErrorMessage('There was an error gathering those resources.');
        setIsLoading(false);
      });
    // eslint-disable-next-line consistent-return
    return () => setIsLoading(true);
  }, [query]);

  const updateQuery = newQueryObject => {
    setErrorMessage(null);
    const relevantQueryStringObject = omit(query, ['page']);
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

  const handleSearch = search => {
    updateQuery(search);
  };

  const handleCost = isPaid => {
    const { value } = isPaid;
    updateQuery({ paid: value });
  };

  const handleCategory = categoryInput => {
    const { value } = categoryInput;
    updateQuery({ category: value });
  };

  const handleLanguages = languageList => {
    if (!languageList) {
      return;
    }
    const languageValues =
      languageList && !!languageList.length ? languageList.map(language => language.value) : null;
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
              <Formik onSubmit={handleSearch}>
                <Form>
                  <Field type="search" name="q" label="Search" component={Input} />
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
                  options={allCategories}
                  onChange={handleCategory}
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

              <div className={styles.selectColumn}>
                <h5>By Cost</h5>
                <ThemedReactSelect
                  instanceId="cost_select"
                  placeholder="Course cost..."
                  className={styles.select}
                  name="Paid"
                  options={costOptions}
                  onChange={handleCost}
                />
              </div>
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              pathname={pathname}
              query={query}
            />
            {isLoading ? (
              <>
                <ResourceSkeletonCard numberOfSkeletons={10} />
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
