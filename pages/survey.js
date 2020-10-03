import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import SurveyForm from 'components/SurveyForm/SurveyForm';

const pageTitle = 'Survey';

Survey.propTypes = {};

function Survey() {
  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Content theme="gray" columns={[<SurveyForm />]} />
    </>
  );
}

export default Survey;
