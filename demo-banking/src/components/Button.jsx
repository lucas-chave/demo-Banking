import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/button.css';

export function Button({ text, to }) {
  return(
      <Link className="button" to={ to } >{ text }</Link>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
