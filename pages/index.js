import Head from 'components/head';
// eslint-disable-next-line max-len
import JoinThrivingSection from 'components/ReusableSections/JoinThrivingSection/JoinThrivingSection';
import Partners from 'components/Partners/Partners';
// import styles from './styles/index.css';

export default () => (
  <div>
    <Head title="Home" />
    <h1>Home</h1>
    <Partners />
    <JoinThrivingSection />
  </div>
);
