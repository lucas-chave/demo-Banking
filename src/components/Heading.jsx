import React from 'react';
import PropTypes from 'prop-types';

export function Heading({ text }) {
  return(
    <h2>{text}</h2>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};
