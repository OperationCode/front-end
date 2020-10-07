import { useEffect, useState } from 'react';
import Link from 'next/link';
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
  loginUser,
} from 'common/constants/api';
import { hasValidAuthToken, setAuthCookies } from 'common/utils/cookie-utils';
import { Field, Formik } from 'formik';
import Modal from 'components/Modal/Modal';
import LoginForm from 'components/LoginForm/LoginForm';
import Alert from 'components/Alert/Alert';
import Button from 'components/Buttons/Button/Button';
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
import CardStyles from 'components/Cards/Card/Card.module.css';
import styles from 'styles/resources.module.css';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const costOptions = [
    { value: 'true', label: 'Paid' },
    { value: 'false', label: 'Free' },
  ];

  const initialValues = {
    category: category || '',
    q: q || '',
    languages: Array.isArray(languages) ? languages : [languages].filter(Boolean),
    paid: paid || '',
  };

  const handleLogin = value => loginUser(value);

  const handleLoginSuccess = ({ token }) => {
    setAuthCookies({ token });
  };

  const handleVote = (/* voteDirection, updateVoteCountFunc */) => {
    setErrorMessage(null);
    if (!hasValidAuthToken()) {
      setIsModalOpen(true);
    }
    // Make api calls to update vote

    // If successful, set new vote count
    // e.g. updateVoteCountFunc(response[voteDirection]);

    // If not, handle error
    // e.g. setErrorMessage('Failed to upvote or downvote....');
  };

  const handleEndpoint = () => {
    if (q) {
      return getResourcesBySearch({ page: page - 1, category, languages, paid, q });
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

  const handleReset = resetForm => {
    setErrorMessage(null);
    router.push(pathname, '/resources/1', { shallow: true });
    resetForm({ values: initialValues });
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
      });
  }, []);

  useEffect(() => {
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
      })
      .finally(() => {
        setIsLoading(false);
      });
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
    <div className={styles.Resources}>
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
              enableReinitialize
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                handleSubmit(values, actions);
                actions.setSubmitting(true);
              }}
            >
              {({ isSubmitting, resetForm }) => (
                <Form role="search">
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
                      onClick={() => handleReset(resetForm)}
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
                          handleVote={handleVote}
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
                      totalPages={totalPages || currentPage}
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
      <Modal
        isOpen={isModalOpen}
        screenReaderLabel="Login Modal"
        onRequestClose={() => setIsModalOpen(false)}
        className={CardStyles.CardModal}
      >
        <h2>Login to Proceed</h2>

        <LoginForm
          login={handleLogin}
          onSuccess={handleLoginSuccess}
          redirectFunction={() => {
            setIsModalOpen(false);
            router.push(router.asPath);
          }}
          buttonTheme="primary"
        />

        <p>
          Forgot your password? Reset it&nbsp;
          <Link href="/password_reset">
            <a>here</a>
          </Link>
        </p>
      </Modal>
    </div>
  );
}

export default Resources;
