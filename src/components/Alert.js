/* eslint-disable react/display-name */
import React from 'react';

function Alert({ message }) {
  return (
    <div className="alert alert-warning" role="alert">
      {message}
    </div>
  );
}

export default Alert;
