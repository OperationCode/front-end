import React, { Component } from 'react';
import Router from 'next/router';
import { array, objectOf, oneOfType, string } from 'prop-types';
import { insertIf } from 'common/utils/array-utils';
import MultiStepForm from 'components/Form/MultiStepForm';
import { ProfessionalDetails, MilitaryStatus, MilitaryDetails, Technology } from './steps';

class UpdateProfileForm extends Component {
  static propTypes = {
    initialValues: objectOf(oneOfType([array, string])),
  };

  static defaultProps = {
    initialValues: {
      ...ProfessionalDetails.initialValues,
      ...MilitaryStatus.initialValues,
      ...MilitaryDetails.initialValues,
      ...Technology.initialValues,
    },
  };

  state = {
    shouldShowMilitaryStep: false,
  };

  onValueChange = values => {
    if (values.militaryStatus === '') {
      return;
    }

    const isMilitary = values.militaryStatus === 'veteran' || values.militaryStatus === 'current';

    if (isMilitary) {
      this.showMilitaryStep();
    } else {
      // setValues remove military values OR on submit, don't pass military values
      this.hideMilitaryStep();
    }
  };

  showMilitaryStep = () => {
    this.setState({ shouldShowMilitaryStep: true });
  };

  hideMilitaryStep = () => {
    this.setState({ shouldShowMilitaryStep: false });
  };

  goToProfile = () => {
    Router.push('/profile');
  };

  render() {
    const { initialValues } = this.props;
    const { shouldShowMilitaryStep } = this.state;

    // ordered
    const steps = [
      ProfessionalDetails,
      MilitaryStatus,
      ...insertIf(shouldShowMilitaryStep, MilitaryDetails),
      Technology,
    ];

    return (
      <MultiStepForm
        initialValues={initialValues}
        onEachStepSubmit={this.onValueChange}
        onFinalSubmit={this.goToProfile}
        steps={steps}
      />
    );
  }
}

export default UpdateProfileForm;
