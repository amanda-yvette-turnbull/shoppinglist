import { useAppSelector } from '../hooks/hook'
import { Recipe as RecipeModel } from '../../models/Recipes'

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
            <div className="one-recipe" key={recipe.id}>
              <a href={`/recipes/${recipe.id}`}>
                <img
                  className="img-cirlce"
                  src={`images${recipe.image}`}
                  alt={recipe.name}
                />
              </a>
              <p>
                <a href={`/recipes/${recipe.id}`}>{recipe.name}</a>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Recipes
