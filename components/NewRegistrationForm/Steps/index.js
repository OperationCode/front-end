import React from 'react';
import InitialStep from './InitialStep/InitialStep';
import PersonalDetailsStep from './PersonalDetailsStep/PersonalDetailsStep';
import ClassificationStep from './ClassificationStep/ClassificationStep';
import MilitaryStep from './MilitaryStep/MilitaryStep';
import TechnologyStep from './TechnologyStep/TechnologyStep';

const orderedSteps = [
  InitialStep,
  PersonalDetailsStep,
  ClassificationStep,
  MilitaryStep,
  TechnologyStep,
];

export const steps = orderedSteps.map(Step => {
  // if fields are changed/added/removed, please adjust propTypes inside MultiStepForm
  return {
    render: props => <Step {...props} />,
    validationSchema: Step.validationSchema,
    submitHandler: Step.submitHandler,
  };
});

export const entireFormInitialValues = orderedSteps.reduce((previousValue, component) => {
  return {
    ...previousValue,
    ...component.initialValues,
  };
}, {});
