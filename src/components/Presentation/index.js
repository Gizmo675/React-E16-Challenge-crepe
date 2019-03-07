/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './Presentation.scss';

/**
 * Code
 */
const Presentation = ({
  name,
  img,
}) => (
  <div id="presentation">
    <img id="presentation-image" src={img} alt={name} />
    <div id="presentation-content">
      <h1 id="presentation-title">{name}</h1>
    </div>
  </div>
);

Presentation.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Presentation;
