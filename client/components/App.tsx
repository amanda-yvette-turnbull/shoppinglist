import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hook'

import { getRecipes } from '../actions/recipes'
import { getIngredients } from '../actions/ingredients'
import { getShoppingList } from '../actions/shoppingList'

//* Components
import Nav from './Nav'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getIngredients())
    dispatch(getRecipes())
    dispatch(getShoppingList())
  }, [dispatch])

  return (
    <>
      <header className="header">
        <h1>My Recipes</h1>
      </header>
      <Nav />
      <main className="main">
        <Outlet />
      </main>
    </>
  )
}

export default App
