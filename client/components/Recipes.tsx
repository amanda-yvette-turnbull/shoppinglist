import { useAppSelector } from '../hooks/hook'
import { Recipe as RecipeModel } from '../../models/Recipes'
import { Link } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'

//Todo make search-bar work
function Recipes() {
  const recipes = useAppSelector((state) => state.recipes) as RecipeModel[]

  //* Search input
  const [results, setResults] = useState(recipes)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const res = recipes.filter((recipe) => recipe.name.includes(e.target.value))
    setResults(res)
  }

  return (
    <div className="page">
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
      <div className="recipes">
        {results && results.length > 0 ? (
          results.map((recipe) => (
            <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
              <div className="single-recipe">
                <img
                  className="recipe-img"
                  src={`/images${recipe.image}`}
                  alt={recipe.name}
                />
                <p className="recipe-name">{recipe.name}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No results under search parameters</p>
        )}
      </div>
    </div>
  )
}

export default Recipes
