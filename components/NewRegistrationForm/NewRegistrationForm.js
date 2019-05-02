import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { login } from 'common/utils/auth-utils';
import { insertIf } from 'common/utils/array-utils';
import MultiStepForm from 'components/Form/MultiStepForm';
import {
  InitialStep,
  PersonalDetailsStep,
  ClassificationStep,
  MilitaryStep,
  TechnologyStep,
} from './Steps';

class NewRegistrationForm extends Component {
  static propTypes = {
    initialValues: PropTypes.objectOf(PropTypes.string),
  };

  static defaultProps = {
    initialValues: {
      // order doesn't matter here
      ...InitialStep.initialValues,
      ...PersonalDetailsStep.initialValues,
      ...ClassificationStep.initialValues,
      ...MilitaryStep.initialValues,
      ...TechnologyStep.initialValues,
    },
  };

  state = {
    shouldShowMilitaryStep: false,
  };

  requireMilitaryStep = () => {
    this.setState({ shouldShowMilitaryStep: true });
  };

  hideMilitaryStep = () => {
    this.setState({ shouldShowMilitaryStep: false });
  };

  // This method was only created to modularize logic
  defineSteps = () => {
    const { shouldShowMilitaryStep } = this.state;

    // Define each step to provide control of each step (particularly, the rendering)
    const Initial = {
      render: props => <InitialStep {...props} />,
      validationSchema: InitialStep.validationSchema,
      submitHandler: InitialStep.submitHandler,
    };

    const PersonalDetails = {
      render: props => <PersonalDetailsStep {...props} />,
      validationSchema: PersonalDetailsStep.validationSchema,
      submitHandler: PersonalDetailsStep.submitHandler,
    };

    const Classification = {
      render: props => (
        <ClassificationStep
          {...props}
          onSelectMilitary={this.requireMilitaryStep}
          onSelectOther={this.hideMilitaryStep}
        />
      ),
      validationSchema: ClassificationStep.validationSchema,
      submitHandler: ClassificationStep.submitHandler,
    };

    const MilitaryInfo = {
      render: props => <MilitaryStep {...props} />,
      validationSchema: MilitaryStep.validationSchema,
      submitHandler: MilitaryStep.submitHandler,
    };

    const TechnologyPreferences = {
      render: props => <TechnologyStep {...props} />,
      validationSchema: TechnologyStep.validationSchema,
      submitHandler: TechnologyStep.submitHandler,
    };

    // Define structure of form
    const orderedArrayOfSteps = [
      Initial,
      PersonalDetails,
      Classification,
      ...insertIf(shouldShowMilitaryStep, MilitaryInfo),
      TechnologyPreferences,
    ];

    return orderedArrayOfSteps;
  };

  render() {
    const { initialValues } = this.props;

    const steps = this.defineSteps();

    return <MultiStepForm initialValues={initialValues} onFinalStepSuccess={login} steps={steps} />;
  }
}

export default NewRegistrationForm;
