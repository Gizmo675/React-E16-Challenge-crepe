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
const Recipe = () => (
  <div id="recipe">
    <Presentation
      name={recipeData.name}
      author={recipeData.author}
      difficulty={recipeData.difficulty}
      img={recipeData.thumbnail}
    />
    <Ingredients ingredients={recipeData.ingredients} />
    <Instructions steps={recipeData.instructions} />
  </div>
);

/**
 * Export
 */
export default Recipe;
