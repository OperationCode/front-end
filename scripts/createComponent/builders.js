/* eslint-disable prettier/prettier */
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

import ${componentName} from '../${componentName}';

export default {
  component: ${componentName},
  title: '${componentName}',
};

const Template = (args) => <${componentName} {...args} />;

export const Default = Template.bind({});

/** Default ${componentName} supplied with only required args */
Default.args = {
  children: '',
};

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
