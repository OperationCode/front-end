import { array, objectOf, oneOfType, string, number, bool } from 'prop-types';
import nextCookie from 'next-cookies';
import get from 'lodash/get';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import UpdateProfileForm from 'components/UpdateProfileForm/UpdateProfileForm';
import withAuthSync from 'decorators/withAuthSync/withAuthSync';
import { getUserPromise } from 'common/constants/api';

UpdateProfile.propTypes = {
  initialValues: objectOf(oneOfType([array, oneOfType([string, number, bool])])),
};

UpdateProfile.defaultProps = {
  initialValues: undefined,
};

UpdateProfile.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx);
  const { data } = await getUserPromise({ token });

  // We get disciplines and programmingLanguages as a comma-separated string back from the server
  // Turn it into an array if trying to populate initialValues.
  const disciplines = get(data, 'disciplines') || '';
  const programmingLanguages = get(data, 'programmingLanguages') || '';

  const formattedData = {
    ...data,
    disciplines: disciplines.split(', '),
    programmingLanguages: programmingLanguages.split(', '),
  };

  return {
    initialValues: { ...UpdateProfileForm.defaultProps.initialValues, ...formattedData },
  };
};

function UpdateProfile({ initialValues }) {
  const pageTitle = 'Update Profile';

  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Content theme="gray" columns={[<UpdateProfileForm initialValues={initialValues} />]} />
    </>
  );
}

export default withAuthSync(UpdateProfile);
