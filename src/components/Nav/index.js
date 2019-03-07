/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
import './nav.scss';
import recipes from 'src/data/recipe';

/**
 * Code
 */
const Nav = () => (
  <div id="nav">
    <nav>
      <li>Home</li>
      {recipes.map(recipe => (
      <NavLink
      exact
      key={recipe.name}
      to={recipe.name}
      >
      {recipe.name}
      </NavLink>
      ))}   
    </nav>
  </div>
);

/**
 * Export
 */
export default Nav;