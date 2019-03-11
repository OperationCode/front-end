import Router from 'next/router';
import { createUser } from 'common/constants/api';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

export default () => (
  <>
    <Head title="Join" />

    <HeroBanner title="Join" />

    <Content
      theme="gray"
      columns={[
        <RegistrationForm register={createUser} onSuccess={() => Router.push('/profile')} />,
      ]}
    />
  </>
);
