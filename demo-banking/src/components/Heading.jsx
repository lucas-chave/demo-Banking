import React from 'react';
import PropTypes from 'prop-types';

function Heanding(props) {
  const { text } = props;
  return(
    <h2>{text}</h2>
  );
}

Heanding.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heanding;
