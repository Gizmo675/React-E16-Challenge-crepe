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
  author,
  difficulty,
  img,
}) => (
  <div id="presentation">
    <img id="presentation-image" src={img} alt={name} />
    <div id="presentation-content">
      <h1 id="presentation-title">{name}</h1>
      <div id="presentation-author">{author}</div>
      <div id="presentation-difficulty">{difficulty}</div>
    </div>
  </div>
);

Presentation.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Presentation;
