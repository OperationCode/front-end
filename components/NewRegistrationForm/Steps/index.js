import React from 'react';
import InitialStep from './InitialStep/InitialStep';
import PersonalDetailsStep from './PersonalDetailsStep/PersonalDetailsStep';
// import ClassificationStep from './ClassificationStep/ClassificationStep';
// import MilitaryStep from './MilitaryStep/MilitaryStep';
// import TechnologyStep from './TechnologyStep/TechnologyStep';

const OrderedSteps = [
  InitialStep,
  PersonalDetailsStep,
  // ClassificationStep,
  // MilitaryStep,
  // TechnologyStep,
];

export const Steps = OrderedSteps.map(Step => {
  return {
    stepRender: props => <Step {...props} />,
    validationSchema: Step.validationSchema,
    stepSubmitHandler: Step.submitHandler,
  };
});

// eslint-disable-next-line unicorn/prevent-abbreviations
export const StepsInitialValues = OrderedSteps.reduce((previousValue, component) => {
  return {
    ...previousValue,
    ...component.initialValues,
  };
}, {});
