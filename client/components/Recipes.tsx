import { useAppSelector } from '../hooks/hook'
import { Recipe as RecipeModel } from '../../models/Recipes'
import { Link } from 'react-router-dom'

function Recipes() {
  const recipes = useAppSelector((state) => state.recipes) as RecipeModel[]

  return (
    <div className="recipes">
      <div className="searchbar">
        <form>
          <label htmlFor="search">search</label>
          <input type="text" id="search" name="searched-for" />
        </form>
      </div>
      <div className="recipes-box">
        {recipes.map((recipe) => {
          return (
            <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
              <div className="one-recipe">
                <img
                  className="img-cirlce"
                  src={`images${recipe.image}`}
                  alt={recipe.name}
                />
                <p>{recipe.name}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Recipes
