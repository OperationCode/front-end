import React from 'react';

import { descriptions } from 'common/constants/descriptions';
import Modal from '../Modal';

export default {
  component: Modal,
  title: 'Modal',
};

const Template = arguments_ => <Modal {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  children: descriptions.medium,
  isOpen: true,
  screenReaderLabel: 'Screen reader declaration',
};
