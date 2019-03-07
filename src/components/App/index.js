/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import Nav from 'src/components/Nav';
import Recipe from 'src/components/Recipe';

// Styles
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Nav />
    <Recipe />
  </div>
);

/**
 * Export
 */
export default App;