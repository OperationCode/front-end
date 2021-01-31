import { arrayOf, shape, string, number } from 'prop-types';
import { getResourceCategories, getResourceLanguages } from 'common/constants/api';
import { ONE_DAY } from 'common/constants/unitsOfTime';
import Alert from 'components/Alert/Alert';
import Content from 'components/Content/Content';
import CreateResourceForm from 'components/Forms/CreateResourceForm/CreateResourceForm';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';

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
  const [alert, setAlert] = React.useState('');
  const clearAlert = () => setAlert(alerts.none);
  const showSuccessAlert = () => setAlert(alerts.success);
  const showErrorAlert = serverMessage => setAlert(serverMessage);

  React.useEffect(() => {
    return clearAlert;
  }, []);

  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Content
        theme="white"
        columns={[
          <CreateResourceForm
            onFailure={showErrorAlert}
            onSuccess={showSuccessAlert}
            categories={categories}
            languages={languages}
          />,
        ]}
      />

      {alert === alerts.success && <Alert type="success">{alert}</Alert>}
      {alert && alert !== alerts.success && <Alert type="error">{alert}</Alert>}
    </>
  );
}
