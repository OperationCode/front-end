import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import { render, fireEvent } from '@testing-library/react';
import { KEY_CODES } from 'test-utils/identifiers';

import NavListItem from '../NavListItem';

describe('NavListItem', () => {
  const testDataWithoutSublinks = {
    href: '/test',
    name: 'Test',
    shouldPrefetch: false,
    sublinks: [],
  };

  const testDataWithSublinks = {
    ...testDataWithoutSublinks,
    sublinks: [
      {
        href: '/test/1',
        name: 'Test - 1',
      },
      {
        href: '/test/2',
        name: 'Test - 2',
      },
    ],
  };

  it('should render with required props passed', () =>
    createShallowSnapshotTest(<NavListItem {...testDataWithoutSublinks} />));

  it('should not render unordered list without passed sublinks', () => {
    const { container } = render(<NavListItem {...testDataWithoutSublinks} />);

    expect(container.querySelector('ul')).toBeNull();
  });

  it('should render an invisible, unordered list when passed sublinks', () => {
    const { container } = render(<NavListItem {...testDataWithSublinks} />);

    const ul = container.querySelector('ul');
    expect(ul).not.toBeNull();
    expect(ul).toHaveClass('invisible');
  });

  it('should have visible sublinks on mouse hover', () => {
    const { container, getByText } = render(<NavListItem {...testDataWithSublinks} />);
    const ul = container.querySelector('ul');
    const link = getByText(testDataWithSublinks.sublinks[0].name);

    fireEvent.mouseEnter(link);

    expect(ul).not.toHaveClass('invisible');

    fireEvent.mouseLeave(link);

    expect(ul).toHaveClass('invisible');
  });

  it('should have visible sublinks on when button is clicked', () => {
    const { container } = render(<NavListItem {...testDataWithSublinks} />);

    const button = container.querySelector('button');

    fireEvent.click(button);

    expect(container.querySelector('ul')).not.toHaveClass('invisible');
  });

  it('should change plus icon to minus icon, when sublinks are visible', () => {
    const { container, queryByTestId } = render(<NavListItem {...testDataWithSublinks} />);

    expect(queryByTestId('minus-icon')).toBeNull();
    expect(queryByTestId('plus-icon')).not.toBeNull();

    fireEvent.mouseEnter(container.querySelector('button'));

    expect(queryByTestId('minus-icon')).not.toBeNull();
    expect(queryByTestId('plus-icon')).toBeNull();
  });

  it('should show sublinks on hover, and then hide them on button click', () => {
    const { container, getByText } = render(<NavListItem {...testDataWithSublinks} />);
    const link = getByText(testDataWithSublinks.sublinks[0].name);

    fireEvent.mouseEnter(link);
    expect(container.querySelector('ul')).not.toHaveClass('invisible');

    fireEvent.click(container.querySelector('button'));
    expect(container.querySelector('ul')).toHaveClass('invisible');
  });

  it('should show sublinks on click, then hide them on pressing Shift+Tab on first sublink', () => {
    const { container, getByTestId } = render(<NavListItem {...testDataWithSublinks} />);

    fireEvent.click(container.querySelector('button'));
    expect(container.querySelector('ul')).not.toHaveClass('invisible');

    fireEvent.keyDown(getByTestId('Nav Item Test - 1'), KEY_CODES.TAB_AND_SHIFT);
    expect(container.querySelector('ul')).toHaveClass('invisible');
  });

  it('should show sublinks on click, then hide them on pressing Tab on last sublink', () => {
    const { container, getByTestId } = render(<NavListItem {...testDataWithSublinks} />);

    fireEvent.click(container.querySelector('button'));
    expect(container.querySelector('ul')).not.toHaveClass('invisible');

    fireEvent.keyDown(getByTestId('Nav Item Test - 2'), KEY_CODES.TAB);
    expect(container.querySelector('ul')).toHaveClass('invisible');
  });
});
