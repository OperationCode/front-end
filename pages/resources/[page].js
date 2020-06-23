import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import get from 'lodash/get';
import isFinite from 'lodash/isFinite';
import omit from 'lodash/omit';
import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Pagination from 'components/Pagination/Pagination';
import {
  getResourcesPromise,
  getResourcesByCategories,
  getResourcesByLanguages,
  getResourcesBySearch,
} from 'common/constants/api';
import { Field, Formik } from 'formik';
import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import ResourceCard from 'components/Cards/ResourceCard/ResourceCard';
import ResourceSkeletonCard from 'components/Cards/ResourceCard/ResourceSkeletonCard';
import Select from 'components/Form/Select/Select';
import {
  RESOURCE_CARD,
  RESOURCE_SEARCH,
  RESOURCE_SEARCH_BUTTON,
  RESOURCE_RESET_BUTTON,
} from 'common/constants/testIDs';
import styles from '../styles/resources.module.css';

const pageTitle = 'Resources';

function Resources() {
  const router = useRouter();
  const { pathname, query } = router;
  const { page, category, languages, paid, q } = query;
  const currentPage = parseInt(page, 10);

  if (page && !isFinite(currentPage)) {
    router.push({ pathname: pathname.replace('[page]', '1') });
  }

  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [resources, setResources] = useState([]);
  const [totalPages, setTotalPages] = useState(currentPage);
  const [allCategories, setAllCategories] = useState([]);
  const [allLanguages, setAllLanguages] = useState([]);

  const costOptions = [
    { value: 'true', label: 'Paid' },
    { value: 'false', label: 'Free' },
  ];

  const initialValues = {
    category: [],
    q: '',
    languages: [],
    paid: '',
  };

  const handleEndpoint = () => {
    if (q) {
      return getResourcesBySearch({ page, category, languages, paid, q });
    }
    return getResourcesPromise({ page, category, languages, paid });
  };

  const handleSubmit = (values, actions) => {
    setIsLoading(true);
    const emptyQueryParameters = Object.entries(values).filter(
      item => item[1] === null || !item[1].length,
    );
    const activeParameters = omit(
      values,
      emptyQueryParameters.map(parameter => parameter[0]),
    );

    updateQuery(activeParameters);
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 500);
  };

  const handleReset = (values, actions) => {
    setErrorMessage(null);
    router.push(pathname, '/resources/1', { shallow: true });
    actions.resetForm({ initialValues });
  };

  useEffect(() => {
    Promise.all([getResourcesByCategories(), getResourcesByLanguages()])
      .then(([categoriesResponse, languagesResponse]) => {
        const {
          data: { categories: categoriesData },
        } = categoriesResponse;
        const {
          data: { languages: languagesData },
        } = languagesResponse;

        setAllLanguages(
          languagesData.map(languageObject => {
            return {
              value: languageObject.name.toLowerCase(),
              label: languageObject.name,
            };
          }),
        );
        setAllCategories(
          categoriesData.map(categoryObject => {
            return {
              value: categoryObject.name.toLowerCase(),
              label: categoryObject.name,
            };
          }),
        );
      })
      .catch(() => {
        setErrorMessage('There was a problem gathering those resources.');
        setIsLoading(false);
      });

    handleEndpoint()
      .then(response => {
        const fetchedResources = get(
          response,
          'data.resources' || 'data.category' || 'data.language',
          [],
        );
        const fetchedNumberOfPages = get(response, 'data.number_of_pages', 0);

        if (fetchedResources.length === 0 || fetchedNumberOfPages === 0) {
          setErrorMessage('This search yielded no results. Try searching for something else.');
          setResources([]);
          setTotalPages(1);
          return;
        }

        setResources(fetchedResources);
        if (q) {
          setTotalPages(fetchedNumberOfPages - 1);
        } else {
          setTotalPages(fetchedNumberOfPages);
        }
      })
      .catch(() => {
        setErrorMessage('There was a problem gathering those resources.');
      });
    return () =>
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
  }, [query]);

  const updateQuery = formData => {
    setErrorMessage(null);
    router.push(
      {
        pathname,
        query: { page, ...formData },
      },
      {
        pathname: pathname.replace('[page]', '1'),
        query: { ...formData },
      },
    );
  };

  return (
    <>
      <Head title={pageTitle} />
      <HeroBanner title={pageTitle} className="smallHero" />
      <Content
        theme="white"
        columns={[
          <section className={styles.resourcesContainer}>
            <OutboundLink
              href="https://www.algolia.com/doc/"
              analyticsEventLabel="Powered by Algolia"
              className={styles.algoliaLink}
            >
              Powered by Algolia
            </OutboundLink>

            <Formik
              enableReinitialize={false}
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                handleSubmit(values, actions);
                actions.setSubmitting(true);
              }}
              onReset={(values, actions) => {
                handleReset(values, actions);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    hasValidationStyling={false}
                    data-testid={RESOURCE_SEARCH}
                    disabled={isSubmitting}
                    type="search"
                    name="q"
                    label="Search Keywords"
                    component={Input}
                  />
                  <div className={styles.formContainer}>
                    <div className={styles.selectColumn}>
                      <Field
                        hasValidationStyling={false}
                        isDisabled={isSubmitting}
                        placeholder="Start typing a category..."
                        label="By Category"
                        name="category"
                        options={allCategories}
                        component={Select}
                      />
                    </div>

                    <div className={styles.selectColumn}>
                      <Field
                        hasValidationStyling={false}
                        isDisabled={isSubmitting}
                        placeholder="Resource cost..."
                        label="By Cost"
                        name="paid"
                        options={costOptions}
                        component={Select}
                      />
                    </div>

                    <div className={styles.selectColumn}>
                      <Field
                        hasValidationStyling={false}
                        isDisabled={isSubmitting}
                        placeholder="Start typing a language..."
                        isMulti
                        label="By Language(s)"
                        name="languages"
                        options={allLanguages}
                        component={Select}
                      />
                    </div>
                  </div>

                  <div className={styles.buttonGroup}>
                    <Button
                      className={styles.buttonSingle}
                      data-testid={RESOURCE_SEARCH_BUTTON}
                      disabled={isSubmitting}
                      theme="secondary"
                      type="submit"
                    >
                      Search
                    </Button>

                    <Button
                      className={styles.buttonSingle}
                      data-testid={RESOURCE_RESET_BUTTON}
                      disabled={isSubmitting}
                      theme="secondary"
                      type="reset"
                    >
                      Reset
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>

            {isLoading ? (
              <ResourceSkeletonCard numberOfSkeletons={10} />
            ) : (
              <>
                {errorMessage && <Alert type="error">{`${errorMessage}`}</Alert>}
                {resources && !!resources.length && (
                  <>
                    <div className={styles.resourcesCardWrapper}>
                      {resources.map(resource => (
                        <ResourceCard
                          data-testid={RESOURCE_CARD}
                          key={resource.id}
                          description={resource.notes}
                          downvotes={resource.downvotes}
                          upvotes={resource.upvotes}
                          href={resource.url || ''}
                          name={resource.name}
                          category={resource.category}
                          languages={resource.languages}
                          isPaid={resource.paid}
                          className={styles.resourceCard}
                        />
                      ))}
                    </div>

                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages || currentPage + 1}
                      pathname={pathname}
                      query={query}
                    />
                  </>
                )}
              </>
            )}
          </section>,
        ]}
      />
    </>
  );
}

export default Resources;
