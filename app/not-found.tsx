import ErrorDisplay from 'components/ErrorDisplay/ErrorDisplay';

export default function NotFound() {
  return <ErrorDisplay statusCode={404} />;
}
