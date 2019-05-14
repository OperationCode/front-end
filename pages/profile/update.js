import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import withAuthSync from 'decorators/withAuthSync/withAuthSync';

class UpdateProfile extends React.Component {
  static async getInitialProps() {
    // TODO: Get all user details for filling out initial form state
  }

  static propTypes = {};

  render() {
    return (
      <>
        <Head title="Update Profile" />

        <HeroBanner title="Update Profile" />

        <Content theme="gray" columns={[<p>MultiStepForm Here</p>]} />
      </>
    );
  }
}

export default withAuthSync(UpdateProfile);
