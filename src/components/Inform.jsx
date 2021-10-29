import React from 'react';
import PropTypes from 'prop-types';
import '../css/inform.css';

export function Inform({ text, data }) {
  return (
    <div className="container-inform">
      <h4>{text}</h4>
      <h4>{data}</h4>
    </div>
  );
}

Inform.propTypes = {
  text: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};
