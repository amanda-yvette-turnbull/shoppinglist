import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

//* Components
import App from './components/App'
import Home from './components/Home'
import Recipes from './components/Recipes'
import Ingredients from './components/Ingredients'
import Shoppinglist from './components/Shoppinglist'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/ingredients" element={<Ingredients />} />
      <Route path="/shoppinglist" element={<Shoppinglist />} />
    </Route>
  )
)

export default router
