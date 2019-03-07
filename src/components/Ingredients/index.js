/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Ingredient from './Ingredient';
import './Ingredients.scss';

/**
 * Code
 */
const Ingredients = ({ ingredients }) => (
  <div id="ingredients">
    {ingredients.map(ingredient => (
      <Ingredient
        key={ingredient.name}
        // {...ingredient} revient au même que de passer
        // name={ingredient.name}
        // quantity={ingredient.quantity}
        {...ingredient}
      />
    ))}
  </div>
);

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

/**
 * Export
 */
export default Ingredients;
