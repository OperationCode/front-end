import Link from 'next/link';
import Router from 'next/router';
import { loginUser } from 'common/constants/api';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import LoginForm from 'components/LoginForm/LoginForm';

export default () => (
  <>
    <Head title="Login" />

    <HeroBanner title="Login" />

    <Content
      theme="gray"
      columns={[
        <LoginForm login={loginUser} onSuccess={() => Router.push('/profile')} />,
        <p>
          Don&apos;t have an account?&nbsp;
          <Link href="/join">
            <a>Register</a>
          </Link>
          .
        </p>,
        <p>
          Forgot your password?&nbsp;
          <Link href="/reset_password">
            <a>Reset it</a>
          </Link>
          .
        </p>,
      ]}
    />
  </>
);
