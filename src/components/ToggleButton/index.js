import React from "react";
import PropTypes from "prop-types";

const ToggleButton = ({ targetId }) => (
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target={`#${targetId}`} aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
);

ToggleButton.propTypes  = {
  targetId:PropTypes.string.isRequired
}; 

export default ToggleButton; 