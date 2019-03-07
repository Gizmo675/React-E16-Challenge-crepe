/**
 * NPM import
 */
import React from 'react';
import { NavLink, Route } from 'react-router-dom';

/**
 * Local import
 */
import Home from 'src/components/Home';
import './nav.scss';
import recipes from 'src/data/recipe';

/**
 * Code
 */
export const slugify = (string) => {
  const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;'
  const b = 'aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------'
  const p = new RegExp(a.split('').join('|'), 'g')
  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with ‘and’
    .replace(/[^\w-]+/g, '') // Remove all non-word characters
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

// console.log(slugify(recipes[0].name));

const Nav = () => (
  <div id="nav">
    <nav>
    <li>
      <NavLink to="/home" key="home">
        Home
      </NavLink>
    </li>
      {recipes.map(recipe => (
      <li>
        <NavLink
        exact
        // key={recipe.name}
        to={`/recipe/${slugify(recipe.name)}`}
        >
        {recipe.name}
        </NavLink>
      </li>
      ))}
    </nav>
  </div>
);

/**
 * Export
 */
export default Nav;