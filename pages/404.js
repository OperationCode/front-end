import ErrorDisplay from 'components/ErrorDisplay/ErrorDisplay';

const FourOhFour = () => {
  // TODO: Log attempted route
  return <ErrorDisplay statusCode={404} />;
};

export default FourOhFour;
