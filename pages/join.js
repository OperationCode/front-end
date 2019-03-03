import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

export default () => (
  <>
    <Head title="Join" />

    <HeroBanner title="Join" />

    <Content theme="gray" title="Join" hasTitleUnderline columns={[<RegistrationForm />]} />
  </>
);
