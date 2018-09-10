/* eslint-disable max-len */

module.exports = {
  // Output generated for component's story file
  buildStoryJs: componentName => `
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    import { withInfo } from '@storybook/addon-info';
    import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

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
  buildTestJs: componentName => `
    /* eslint-env jest */
    import React from 'react';
    import createSnapshotTest from 'test-utils/createSnapshotTest';

    describe('${componentName}', () => {
      it('should render with just required props passed', () => {
        createSnapshotTest(<${componentName}>Test</${componentName}>);
      });

      it('should render properly with all props assigned', () => {
        createSnapshotTest(
          <${componentName} className="test-class">
            Test
          </${componentName}>,
        );
      });
    });
  `,

  // Output generated for component's css file
  buildCss: componentName => `.${componentName} { \n }`,

  // Output generated for component's definition file
  buildJS: componentName => `
    import React, { Component } from 'react';
    import PropTypes from 'prop-types';
    import classNames from 'classnames';
    import styles from './${componentName}.css';

    export default class ${componentName} extends Component {
      static propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.element]).isRequired,
        className: PropTypes.string,
      };

      static defaultProps = {
        className: '',
      };

      render() {
        const { props } = this;

        return (
            <>
              {children}
            </>
        );
      }
    }
  `,
};
