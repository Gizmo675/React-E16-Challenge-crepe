/**
 * NPM import
 */
import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

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

class App extends React.Component {
  state = {};

  componentDidMount() {
    const url = 'https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json';
    // Appel avec axios en GET
    axios.get(url)
      // Succès
      .then()
      // Échec
      .catch()
      // Dans tous le
      .then(() => {});
  }

  render() {
    return (
      <div id="app">
      <Nav />
      {recipes.map(recipe => (
        <Route
          exact
          key={recipe.name}
          path={`/recipe/${slugify(recipe.name)}`}
          render={() => <Recipe {...recipe} />}
        />
      ))}
      <Route path="/home" component={Home} />
    </div>
    );  

  }
}

/**
 * Export
 */
export default App;
