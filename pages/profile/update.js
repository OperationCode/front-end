import { array, objectOf, oneOfType, string, number, bool } from 'prop-types';
import nextCookie from 'next-cookies';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import UpdateProfileForm from 'components/UpdateProfileForm/UpdateProfileForm';
import withAuthSync from 'decorators/withAuthSync/withAuthSync';
import { getUserPromise } from 'common/constants/api';

class UpdateProfile extends React.Component {
  static async getInitialProps(ctx) {
    const { token } = nextCookie(ctx);
    const { data } = await getUserPromise({ token });
    return { initialValues: { ...UpdateProfileForm.defaultProps.initialValues, ...data } };
  }

  static propTypes = {
    initialValues: objectOf(oneOfType([array, oneOfType([string, number, bool])])),
  };

  static defaultProps = {
    initialValues: undefined,
  };

  render() {
    const { initialValues } = this.props;
    return (
      <>
        <Head title="Update Profile" />

        <HeroBanner title="Update Profile" />

        <Content theme="gray" columns={[<UpdateProfileForm initialValues={initialValues} />]} />
      </>
    );
  }
}

export default withAuthSync(UpdateProfile);
