/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { oneOfType, array, shape, string } from 'prop-types';
import get from 'lodash/get';
import omit from 'lodash/omit';
import isNaN from 'lodash/isNaN';
import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Pagination from 'components/Pagination/Pagination';
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
import Button from 'components/Button/Button';
import Select from 'components/Form/Select/Select';
import Alert from 'components/Alert/Alert';
import { RESOURCE_SEARCH } from 'common/constants/testIDs';
import styles from '../styles/resources.module.css';

const pageTitle = 'Resources';

const ResourceCard = dynamic(() => import('../../components/Cards/ResourceCard/ResourceCard'), {
  loading: () => <ResourceSkeletonCard numberOfSkeletons={5} />,
});

Resources.propTypes = {
  initialValues: shape({
    category: string,
    q: string,
    languages: oneOfType([string, array]),
    paid: string,
  }),
};

Resources.defaultProps = {
  initialValues: {
    category: '',
    q: '',
    languages: [''],
    paid: '',
  },
};

function Resources({ initialValues }) {
  const router = useRouter();
  const { pathname, query } = router;
  const { page, category, languages, paid, q } = query;
  const currentPage = parseInt(page, 10);

  if (page && isNaN(page)) {
    router.push({ pathname: pathname.replace('[page]', '1') });
  }
  const [errorMessage, setErrorMessage] = useState(null);

  const [resources, setResources] = useState([]);
  const [totalPages, setTotalPages] = useState(currentPage);

  const [allCategories, setAllCategories] = useState([]);
  const [allLanguages, setAllLanguages] = useState([]);

  const costOptions = [
    { label: 'Paid', value: 'true' },
    { label: 'Free', value: 'false' },
  ];

  const handleError = error =>
    error.errors
      ? error.errors['not-found'].message
      : 'There was a problem loading those resources.';

  const handleEndpoint = () => {
    if (q) {
      return getResourcesBySearch({ page, category, languages, paid, q });
    }
    return getResourcesPromise({ page, category, languages, paid });
  };

  const handleSubmit = (values, actions) => {
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
      .catch(error => {
        setErrorMessage(handleError(error));
      });

    setErrorMessage(null);
    handleEndpoint()
      .then(response => {
        const fetchedResources = get(response, 'data.data', []);
        const fetchedNumberOfPages = get(response, 'data.number_of_pages', 0);

        if (fetchedResources.length === 0 || fetchedNumberOfPages === 0) {
          setErrorMessage(handleError(response));
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
      .catch(error => {
        setErrorMessage(handleError(error));
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
    <>
      <Head title={pageTitle} />
      <HeroBanner title={pageTitle} className="smallHero" />
      <Content
        theme="white"
        columns={[
          <section className={styles.resourcesContainer}>
            <Formik
              initialValues={initialValues}
              enableReinitialize={false}
              onSubmit={(values, actions) => {
                handleSubmit(values, actions);
                actions.setSubmitting(true);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
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
                    <Button disabled={isSubmitting} type="submit">
                      Search
                    </Button>

                    <Button disabled={isSubmitting} type="reset">
                      Reset
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
            {errorMessage && <Alert type="error">{`${errorMessage}`}</Alert>}
            {resources && !!resources.length && (
              <>
                <div className={styles.resourcesCardWrapper}>
                  {resources.map(resource => (
                    <ResourceCard
                      data-testid="RESOURCE_CARD"
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
                  totalPages={totalPages || 1}
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

export default Resources;
