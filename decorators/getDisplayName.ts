// Gets the display name of a JSX component for dev tools
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getDisplayName = (Component: any) => Component.displayName || Component.name || 'Component';

export default getDisplayName;
