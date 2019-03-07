/**
 * NPM import
 */
import React from 'react';
import { Route } from 'react-router-dom';

/**
 * Local import
 */
import Nav from 'src/components/Nav';
import Recipe from 'src/components/Recipe';
import recipes from 'src/data/recipe';
import { slugify } from 'src/components/Nav';
// Styles
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Nav />
    {recipes.map(recipe => (
      <Route
      exact
      key={recipe.name}
      path={`/recipe/${slugify(recipe.name)}`}
      render={() => <Recipe />}
      />
    ))}
  </div>
);

/**
 * Export
 */
export default App;