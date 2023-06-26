import { useAppSelector, useAppDispatch } from '../hooks/hook'
import { Recipe as RecipeModel } from '../../models/Recipes'
import Recipe from './Recipe'

function Recipes() {
  const dispatch = useAppDispatch()
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
          return <Recipe key={recipe} props={recipe} />
        })}
        {/* {{#each recipes}}
        <div className="one-recipe">
          <a href="/recipes/{{id}}">
          <img className="img-cirlce" src="images{{image}}" alt="{{name}}"/></a>
          <p><a href="/recipes/{{id}}">{{name}}</a></p>
        </div>
      {{/each}} */}
      </div>
    </div>
  )
}

export default Recipes
