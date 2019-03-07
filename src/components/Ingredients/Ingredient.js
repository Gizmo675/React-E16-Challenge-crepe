/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

/**
 * Code
 */
const Ingredient = ({ name, quantity }) => (
  <div className="ingredient">
    <div className="ingredient-quantity">{quantity}</div>
    <div className="ingredient-name">{name}</div>
  </div>
);

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

/**
 * Export
 */
export default Ingredient;
