import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

//* Components
import App from './components/App'
import Home from './components/Home'
import Recipes from './components/Recipes'
import Recipe from './components/Recipe'
import Ingredients from './components/Ingredients'
import Ingredient from './components/Ingredient'
import Shoppinglist from './components/Shoppinglist'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="recipes/:id" element={<Recipe />} />
      <Route path="ingredients" element={<Ingredients />} />
      <Route path="ingredients/:id" element={<Ingredient />} />
      <Route path="shoppinglist" element={<Shoppinglist />} />
    </Route>
  )
)

export default router
