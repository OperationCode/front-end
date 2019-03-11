import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';

export default () => (
  <>
    <Head title="Profile" />

    <HeroBanner title="Profile" />

    <Content theme="gray" columns={[<p>Under construction!</p>]} />
  </>
);
