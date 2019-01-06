/* eslint-disable max-len */
/* This file contains the functions which generate the output of each file */
module.exports = {
  // Output generated for component's definition file
  buildJS: componentName =>
    `import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './${componentName}.css';

export default class ${componentName} extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.element,
      PropTypes.string,
    ]).isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
<<<<<<< HEAD
    className: '',
=======
    className: undefined,
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  };

  render() {
    const { props } = this;

    return <div className={classNames(props.className, styles.${componentName})}>{props.children}</div>;
  }
}
`,

  // Output generated for component's css file
  buildCss: componentName => `.${componentName} {}`,

  // Output generated for component's story file
  buildStoryJs: componentName =>
    `import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import ${componentName} from '../${componentName}';

storiesOf('Common/${componentName}', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <${componentName}>
        {text('children', 'PropTypes.string or .node')}
      </${componentName}>
    )),
  );
`,

  // Output generated for component's test file
  buildTestJs: componentName =>
    `/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ${componentName} from '../${componentName}';

describe('${componentName}', () => {
<<<<<<< HEAD
  it('should render with just required props passed', () => {
    createSnapshotTest(<${componentName}>Test</${componentName}>);
  });

  it('should render properly with all props assigned', () => {
=======
  it('should render with required props', () => {
    createSnapshotTest(<${componentName}>Test</${componentName}>);
  });

  it('should render with many props assigned', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    createSnapshotTest(
      <${componentName} className="test-class">
        Test
      </${componentName}>,
    );
  });
});
`,
};
