/* eslint-disable max-len */
/* This file contains the functions which generate the output of each file */
module.exports = {
  // Output generated for component's definition file
  buildJS: componentName =>
    `import React from 'react';
import { string, node } from 'prop-types';
import classNames from 'classnames';
import styles from './${componentName}.module.css';

${componentName}.propTypes = {
  children: node.isRequired,
  className: string,
};

${componentName}.defaultProps = {
  className: undefined,
};

export default function ${componentName}({ className, children }) {
  return <div className={classNames(className, styles.${componentName})}>{children}</div>
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
    `import React from 'react';
import { render } from '@testing-library/react';

import ${componentName} from '../${componentName}';

describe('${componentName}', () => {
  it('should render', () => {
    const { container } = render(<${componentName} />);

    expect(container.firstChild).not.toBeNull();
  })
});
`,
};
