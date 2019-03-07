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
import Home from 'src/components/Home';
import recipes from 'src/data/recipe';
import { slugify } from 'src/components/Nav';

// Styles
import './app.scss';

/**
 * Code
 */
console.log(recipes);
const App = ({
  
}) => (
  <div id="app">
    <Nav />
    {recipes.map(recipe => (
      <Route
        exact
        key={recipe.name}
        path={`/recipe/${slugify(recipe.name)}`}
        render={() => <Recipe 
        name={recipe.name}
        img={recipe.imageURL}
        />}
      />
    ))}
    <Route path="/home" component={Home} />
  </div>
);

/**
 * Export
 */
export default App;
