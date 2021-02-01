import { arrayOf, shape, string, number } from 'prop-types';
import { useRouter } from 'next/router';
import { getResourceCategories, getResourceLanguages } from 'common/constants/api';
import { ONE_DAY } from 'common/constants/unitsOfTime';
import Alert from 'components/Alert/Alert';
import Content from 'components/Content/Content';
import CreateResourceForm from 'components/Forms/CreateResourceForm/CreateResourceForm';
import Head from 'components/head';
import Button from 'components/Buttons/Button/Button';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import styles from 'styles/create_resource.module.css';
import { hasValidAuthToken } from 'common/utils/cookie-utils';
import LinkButton from 'components/Buttons/LinkButton/LinkButton';

const alerts = {
  none: null,
  success: 'You added to our resources database! Thank you.',
};

const pageTitle = 'Create Resource';

export async function getStaticProps() {
  try {
    const { categories, languages } = await Promise.all([
      getResourceCategories(),
      getResourceLanguages(),
    ]).then(([categoriesResponse, languagesResponse]) => {
      return {
        categories: categoriesResponse.data.categories,
        languages: languagesResponse.data.languages,
      };
    });

    return {
      props: {
        categories,
        languages,
      },
      revalidate: ONE_DAY,
    };
  } catch (error) {
    throw new Error(error);
  }
}

CreateResource.propTypes = {
  categories: arrayOf(shape({ name: string, id: number })).isRequired,
  languages: arrayOf(shape({ name: string, id: number })).isRequired,
};

export default function CreateResource({ categories, languages }) {
  const isLoggedIn = hasValidAuthToken();
  const router = useRouter();
  const [alert, setAlert] = React.useState('');

  React.useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login?unauthorized=true');
    }
  }, [isLoggedIn]);

  const clearAlert = () => setAlert(alerts.none);
  const showSuccessAlert = () => setAlert(alerts.success);
  const showErrorAlert = serverMessage => setAlert(serverMessage);

  React.useEffect(() => {
    return clearAlert;
  }, []);

  return (
    <div className={styles.CreateResource}>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Content
        theme="white"
        columns={[
          <>
            {alert === alerts.success && (
              <div className={styles.success}>
                <Alert type="success" className={styles.alert}>
                  {alert}
                </Alert>

                <div className={styles.buttonGrouping}>
                  <LinkButton href="/resources" theme="secondary">
                    View Resources
                  </LinkButton>

                  <Button onClick={router.reload} theme="secondary">
                    Create Another
                  </Button>
                </div>
              </div>
            )}
            {alert && alert !== alerts.success && (
              <div className={styles.error}>
                <Alert type="error" className={styles.alert}>
                  {alert}
                </Alert>

                <div className={styles.buttonGrouping}>
                  <Button onClick={router.back} theme="secondary">
                    Go Back
                  </Button>

                  <Button onClick={router.reload} theme="secondary">
                    Reset Form
                  </Button>
                </div>
              </div>
            )}

            <CreateResourceForm
              onFailure={showErrorAlert}
              onSuccess={showSuccessAlert}
              categoryOptions={categories}
              languageOptions={languages}
            />
          </>,
        ]}
      />
    </div>
  );
}
