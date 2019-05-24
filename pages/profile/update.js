import { array, objectOf, oneOfType, string } from 'prop-types';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import UpdateProfileForm from 'components/UpdateProfileForm/UpdateProfileForm';
import withAuthSync from 'decorators/withAuthSync/withAuthSync';

class UpdateProfile extends React.Component {
  static async getInitialProps() {
    // TODO: Get all user details for filling out initial form state
  }

  static propTypes = {
    initialValues: objectOf(oneOfType([array, string])),
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
