import { ErrorDisplay } from 'components/ErrorDisplay/ErrorDisplay';

export default function Custom404() {
  return <ErrorDisplay statusCode={404} />;
}
