import { useAppSelector } from '../hooks/hook'
import { Ingredient } from '../../models/Ingredients'
import { Link } from 'react-router-dom'

function Ingredients() {
  const ingredients = useAppSelector(
    (state) => state.ingredients
  ) as Ingredient[]

  return (
    <div className="page">
      <div className="searchbar">
        <form>
          <label htmlFor="search">search</label>
          <input type="text" id="search" name="searched-for" />
        </form>
      </div>

      <ul>
        {ingredients.map((ingredient) => {
          return (
            <li key={ingredient.id}>
              <Link to={`/ingredients/${ingredient.id}`}>
                {ingredient.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Ingredients
