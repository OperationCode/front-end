/* eslint-disable max-len */
/* This file contains the functions which generate the output of each file */
module.exports = {
  // Output generated for component's definition file
  buildJS: componentName =>
    `import React from 'react';
import { oneofType, arrayOf, element, string, node } from 'prop-types';
import classNames from 'classnames';
import styles from './${componentName}.css';

export default class ${componentName} extends React.Component {
  static propTypes = {
    children: oneOfType([
      arrayOf(node),
      element,
      string,
    ]).isRequired,
    className: string,
  };

  static defaultProps = {
    className: undefined,
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

storiesOf('${componentName}', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <${componentName}>
        {text('children', 'string or .node')}
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
  it('should render with required props', () => {
    createSnapshotTest(<${componentName}>Test</${componentName}>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <${componentName} className="test-class">
        Test
      </${componentName}>,
    );
  });
});
`,
};
