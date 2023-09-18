import { useAppSelector, useAppDispatch } from '../hooks/hook'
import { ChangeEvent, useState } from 'react'

import { newShoppingList as shoppingListThunk } from '../actions/shoppingList'
import { Recipe } from '../../models/Recipes'

function ShoppingListEdit({ setEdit }) {
  const dispatch = useAppDispatch()

  const shoppingList = useAppSelector((state) => state.shoppingList as Recipe[])
  const [newShoppingList, setNewShoppingList] = useState({
    list: shoppingList,
    idList: shoppingList.map((recipe) => {
      return recipe.id
    }),
  })
  const recipes = useAppSelector((state) => state.recipes as Recipe[])

  //*This function needs to show all the recipes of the week with minus buttons on them, then all the leftover ones with plus buttons on them. t also needs to have a confirm button which sends through an array of all the recipes ids to the backend. We also want a search feature.

  //* Search input
  const [results, setResults] = useState(recipes)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const res = recipes.filter((recipe) => recipe.name.includes(e.target.value))
    setResults(res)
  }

  //* editing shopping list
  const addRecipe = (recipe: Recipe) => {
    console.log(recipe)
    if (!newShoppingList.idList.includes(recipe.id)) {
      setNewShoppingList({
        list: [...newShoppingList.list, recipe],
        idList: [...newShoppingList.idList, recipe.id],
      })
    } else {
      console.log('already added')
      //! possibly add a pop up saying that this is already added to your cart
    }
  }

  const delRecipe = (recipe: Recipe) => {
    setNewShoppingList({
      list: newShoppingList.list.filter((res) => res !== recipe),
      idList: newShoppingList.idList.filter((res) => res !== recipe.id),
    })
    console.log(newShoppingList)
  }

  //* saving shopping list
  const handleClick = () => {
    dispatch(shoppingListThunk(newShoppingList.idList))
    setEdit('hide')
  }

  return (
    <>
      <h1>Edit Shopping List</h1>
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
          {newShoppingList && newShoppingList.list.length > 0 ? (
            newShoppingList.list.map((recipe) => (
              <div className="single-recipe" key={recipe.id}>
                <button onClick={() => delRecipe(recipe)}>-</button>
                <img
                  className="recipe-img"
                  src={`/images${recipe.image}`}
                  alt={recipe.name}
                />
                <p className="recipe-name">{recipe.name}</p>
              </div>
            ))
          ) : (
            <p>{'Shopping cart is empty :('}</p>
          )}
        </div>
        <div className="sl-recipes">
          {results && results.length > 0 ? (
            results.map((recipe) => (
              <div className="single-recipe" key={recipe.id}>
                <button onClick={() => addRecipe(recipe)}>+</button>
                <img
                  className="recipe-img"
                  src={`/images${recipe.image}`}
                  alt={recipe.name}
                />
                <p className="recipe-name">{recipe.name}</p>
              </div>
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
