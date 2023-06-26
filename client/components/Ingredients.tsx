import { useAppSelector, useAppDispatch } from '../hooks/hook'
import { Ingredient } from '../../models/Ingredients'

function Ingredients() {
  const dispatch = useAppDispatch()
  const ingredients = useAppSelector(
    (state) => state.ingredients
  ) as Ingredient[]

  return (
    <div className="ingredients">
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
              <a href={`ingredients/${ingredient.id}`}>{ingredient.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Ingredients
