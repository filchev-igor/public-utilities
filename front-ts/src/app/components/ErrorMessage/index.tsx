import React from 'react';

const ErrorMessage = (error: { [s: string]: object }) => Object.values(error)
  .filter((value) => typeof value === 'string')
  .map((value) => (
    <div className="alert alert-danger" role="alert">
      {value}
    </div>
  ));

export default ErrorMessage;
