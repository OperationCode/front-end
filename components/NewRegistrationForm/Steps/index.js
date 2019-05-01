import React from 'react';
import InitialStep from './InitialStep/InitialStep';
import PersonalDetailsStep from './PersonalDetailsStep/PersonalDetailsStep';
import ClassificationStep from './ClassificationStep/ClassificationStep';
import MilitaryStep from './MilitaryStep/MilitaryStep';
import TechnologyStep from './TechnologyStep/TechnologyStep';

const OrderedSteps = [
  InitialStep,
  PersonalDetailsStep,
  ClassificationStep,
  MilitaryStep,
  TechnologyStep,
];

export const Steps = OrderedSteps.map(Step => {
  // if fields are changed/added/removed, please adjust propTypes inside MultiStepForm
  return {
    render: props => <Step {...props} />,
    validationSchema: Step.validationSchema,
    submitHandler: Step.submitHandler,
    getNumberOfStepSkips: ({ values }) => Step.getNumberOfStepSkips(values),
  };
});

// eslint-disable-next-line unicorn/prevent-abbreviations
export const StepsInitialValues = OrderedSteps.reduce((previousValue, component) => {
  return {
    ...previousValue,
    ...component.initialValues,
  };
}, {});
