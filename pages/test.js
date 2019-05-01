import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import NewRegistrationForm from 'components/NewRegistrationForm/NewRegistrationForm';

class Test extends React.Component {
  render() {
    return (
      <>
        <Head title="Test" />

        <HeroBanner title="Join Us" />

        <Content theme="gray" columns={[<NewRegistrationForm />]} />
      </>
    );
  }
}

export default Test;
