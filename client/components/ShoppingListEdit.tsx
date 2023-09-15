import { useAppSelector } from '../hooks/hook'
import { Link } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'

import { Recipe } from '../../models/Recipes'

function ShoppingListEdit({ setEdit }) {
  const shoppingList = useAppSelector((state) => state.shoppingList as Recipe[])
  //*This function needs to show all the recipes of the week with minus buttons on them, then all the leftover ones with plus buttons on them. t also needs to have a confirm button which sends through an array of all the recipes ids to the backend. We also want a search feature.

  //* Search input
  const [results, setResults] = useState(shoppingList)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const res = shoppingList.filter((recipe) =>
      recipe.name.includes(e.target.value)
    )
    setResults(res)
  }

  const handleClick = () => {
    setEdit('hide')
  }

  return (
    <>
      <div className="search-bar">
        <form>
          <label htmlFor="search">search</label>
          <input
            type="text"
            id="search"
            name="searched-for"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="sl-page">
        <div className="sl-recipes">
          {/* <p>Recipes:</p> */}
          {results && results.length > 0 ? (
            results.map((recipe) => (
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
            ))
          ) : (
            <p>No results under search parameters</p>
          )}
        </div>
      </div>
      <button onClick={handleClick}>Confirm</button>
    </>
  )
}

export default ShoppingListEdit
