import React from 'react';
import PropTypes from 'prop-types';

export function Heanding({ text }) {
  return(
    <h2>{text}</h2>
  );
}

Heanding.propTypes = {
  text: PropTypes.string.isRequired,
};
