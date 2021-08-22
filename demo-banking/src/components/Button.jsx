import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/button.css';

function Button(props) {
  const { text, to } = props;
  return(
      <Link className="button" to={ to } >{ text }</Link>
  );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
