import Head from 'components/head';
import * as Yup from 'yup';
import { Field } from 'formik';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import Input from 'components/Form/Input/Input';
import MultiStepForm from 'components/Form/MultiStepForm';

class Test extends React.Component {
  submitHandler = stuff => {
    console.log('TEST SUBMIT');
    console.log('stuff', stuff);
  };

  successHandler = () => {
    console.log('SUCCESS');
  };

  render() {
    const testSteps = [
      {
        stepRender: ({ isSubmitting }) => (
          <>
            <Field name="field1" label="Field 1*" component={Input} disabled={isSubmitting} />
            <Field name="field2" label="Field 2*" component={Input} disabled={isSubmitting} />
          </>
        ),
        validationSchema: Yup.object().shape({
          field1: Yup.string().required(),
          field2: Yup.string().required(),
        }),
      },
      {
        stepRender: ({ isSubmitting }) => (
          <>
            <Field name="field3" label="Field 3*" component={Input} disabled={isSubmitting} />
            <Field name="field4" label="Field 4*" component={Input} disabled={isSubmitting} />
          </>
        ),
        validationSchema: Yup.object().shape({
          field3: Yup.string().required(),
          field4: Yup.string().required(),
        }),
      },
    ];

    return (
      <>
        <Head title="Test" />

        <HeroBanner title="Test" />

        <Content
          theme="gray"
          columns={[
            <MultiStepForm
              initialValues={{ field1: '', field2: '', field3: '', field4: '' }}
              onSubmit={this.submitHandler}
              onSuccess={this.successHandler}
              steps={testSteps}
            />,
          ]}
        />
      </>
    );
  }
}

export default Test;
