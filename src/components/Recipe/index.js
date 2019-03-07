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
const Recipe = ({ name, img }) => (
  <div id="recipe">
    <Presentation
      name={name}
      img={img}
    />
    <Ingredients ingredients={recipeData.ingredients} />
    <Instructions steps={recipeData.instructions} />
  </div>
);

/**
 * Export
 */
export default Recipe;
