import PropTypes from 'prop-types';

const DisplayError = ({ error }) => {
  if (!error || !error.message) {
    return null;
  }
  if (error.message) {
    return (
      <div className="font-bold">
        <p>{error.message}</p>
      </div>
    );
  }
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((errorMsg, i) => (
      <div key={i}>
        <p>
          <strong>Shoot!</strong>
          {errorMsg.message}
        </p>
      </div>
    ));
  }
  return (
    <div className=" font-bold">
      <p>
        <strong>Error: </strong>
        {error.message}
      </p>
    </div>
  );
};
DisplayError.defaultProps = {
  error: {},
};

DisplayError.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.object,
};
export default DisplayError;
