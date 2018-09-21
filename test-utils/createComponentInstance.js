import TestRenderer from 'react-test-renderer';

export default function createComponentInstance(Component) {
  const root = TestRenderer.create(Component);
  return root.getInstance();
}
