import { Link } from 'react-router-dom'
import { Recipe } from '../../models/Recipes'
import { useEffect, useState } from 'react'

function ListDisplay(shoppingList: Recipe[]) {
  return (
    <>
      {shoppingList.map((recipe) => (
        <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
          <div className="single-recipe">
            <img
              className="recipe-img"
              src={`/images${recipe.image}`}
              alt={recipe.name}
            />
            <p className="recipe-name">{recipe.name}</p>
          </div>
        </Link>
      ))}
    </>
  )
}

export default ListDisplay
