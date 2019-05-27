import Link from 'next/link';
import { func, object } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setLoggedIn } from 'store/loggedIn/actions';
import { withRouter } from 'next/router';
import { login } from 'common/utils/auth-utils';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

const profileUpdateURL = '/profile/update';

class Join extends React.Component {
  static propTypes = {
    dispatch: func.isRequired,
    router: object.isRequired,
  };

  componentDidMount() {
    const { router } = this.props;

    router.prefetch(profileUpdateURL);
  }

  handleSuccess = ({ token, user }) => {
    const { dispatch } = this.props;

    login({ token, user }, profileUpdateURL);
    dispatch(setLoggedIn());
  };

  render() {
    return (
      <>
        <Head title="Join" />

        <HeroBanner title="Join" />

        <Content
          theme="gray"
          columns={[
            <RegistrationForm onSuccess={this.handleSuccess} />,
            <p>
              Already registered?&nbsp;
              <Link href="/login">
                <a>Login</a>
              </Link>
              .
            </p>,
          ]}
        />
      </>
    );
  }
}

export default compose(
  connect(),
  withRouter,
)(Join);
