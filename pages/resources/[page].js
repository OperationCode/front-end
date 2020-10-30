import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import get from 'lodash/get';
import isFinite from 'lodash/isFinite';
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
  updateResourceVoteCount,
} from 'common/constants/api';
import { hasValidAuthToken, setAuthCookies } from 'common/utils/cookie-utils';
import Modal from 'components/Modal/Modal';
import LoginForm from 'components/Forms/LoginForm/LoginForm';
import Alert from 'components/Alert/Alert';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import ResourceCard from 'components/Cards/ResourceCard/ResourceCard';
import ResourceSkeletonCard from 'components/Cards/ResourceCard/ResourceSkeletonCard';
import { RESOURCE_CARD } from 'common/constants/testIDs';
import ModalStyles from 'components/Modal/Modal.module.css';
import styles from 'styles/resources.module.css';
import isUndefined from 'lodash/isUndefined';
import ResourceSearchForm from 'components/Forms/ResourceSearchForm/ResourceSearchForm';
import CardStyles from 'components/Cards/Card/Card.module.css';

const pageTitle = 'Resources';

function Resources() {
  const router = useRouter();
  const { pathname, query } = router;
  const { page, category, languages, free, q } = query;
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

  const handleLogin = value => loginUser(value);

  const handleLoginSuccess = ({ token }) => {
    setAuthCookies({ token });
  };

  const handleVote = (voteDirection, id, setUpVotes, setDownVotes) => {
    setErrorMessage(null);
    if (!hasValidAuthToken()) {
      setIsModalOpen(true);
      return;
    }
    updateResourceVoteCount({ id, voteDirection })
      .then(({ data: { resource } }) => {
        setUpVotes(resource.upvotes);
        setDownVotes(resource.downvotes);
      })
      .catch(() => {
        setErrorMessage(`There was a problem ${voteDirection.slice(0, -1)}ing a resource.`);
      });
  };

  const handleEndpoint = () => {
    if (q) {
      return getResourcesBySearch({ page: page - 1, category, languages, free, q });
    }
    return getResourcesPromise({ page, category, languages, free });
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
            <ResourceSearchForm
              fields={{
                languages,
                category,
                free,
                q,
              }}
              setIsLoading={setIsLoading}
              updateQuery={updateQuery}
              setErrorMessage={setErrorMessage}
              allCategories={allCategories}
              allLanguages={allLanguages}
            />
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
                          id={resource.id}
                          key={resource.id}
                          description={resource.notes}
                          downvotes={resource.downvotes}
                          upvotes={resource.upvotes}
                          handleVote={handleVote}
                          href={resource.url || ''}
                          name={resource.name}
                          category={resource.category}
                          languages={resource.languages}
                          isFree={isUndefined(resource.free) ? !resource.paid : resource.free}
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
        childrenClassName={ModalStyles.unscrollableContainer}
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
