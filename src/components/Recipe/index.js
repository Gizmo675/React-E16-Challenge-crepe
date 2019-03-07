/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import Presentation from 'src/components/Presentation';
import Ingredients from 'src/components/Ingredients';
import Instructions from 'src/components/Instructions';
// import Presentation from '../Presentation';

// Styles
import './Recipe.scss';

// data
import recipeData from 'src/data/oldRecipe';

/**
 * Code
 */
const Recipe = ({ ...recipe }) => (
  <div id="recipe">
    <Presentation
      name={recipe.name}
      img={recipe.imageURL}
    />
    <Ingredients ingredients={recipe.ingredients} />
    <Instructions steps={recipe.steps} />
  </div>
);

/**
 * Export
 */
export default Recipe;
