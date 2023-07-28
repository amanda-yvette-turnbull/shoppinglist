import { useAppSelector } from '../hooks/hook'
import { Recipe as RecipeModel } from '../../models/Recipes'
import { Link } from 'react-router-dom'

//Todo make search-bar work
function Recipes() {
  const recipes = useAppSelector((state) => state.recipes) as RecipeModel[]

  return (
    <div className="page">
      <div className="search-bar">
        <form>
          <label htmlFor="search">search</label>
          <input type="text" id="search" name="searched-for" />
        </form>
      </div>
      <div className="recipes">
        {recipes.map((recipe) => {
          return (
            <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
              <div className="single-recipe">
                <img
                  className="recipe-img"
                  src={`/images${recipe.image}`}
                  alt={recipe.name}
                />
                <div className="recipe-name">{recipe.name}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Recipes
