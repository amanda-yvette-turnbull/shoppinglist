import { Link, useParams } from 'react-router-dom'
import { Recipe as RecipeModel } from '../../models/Recipes'
import { fetchRecipe } from '../apis/recipesApi'
import { useEffect, useState } from 'react'

function Recipe() {
  const [recipe, setRecipe] = useState({} as RecipeModel)
  const { id } = useParams()

  useEffect(() => {
    const getRecipe = async () => {
      const recipeData = await fetchRecipe(Number(id))
      setRecipe(recipeData)
    }
    getRecipe()
  }, [id])

  return (
    <div className="rec-container">
      <div>
        <img src={`/images${recipe.image}`} alt={`${recipe.name}`} />
      </div>
      <div>
        <h1 className="rec-labels">{recipe.name}</h1>
        <h2>Ingredients:</h2>
        <ul>
          {recipe.ingredients?.map((ingredient) => {
            return (
              <Link
                key={ingredient.ingredient_id}
                to={`{ingredients/${ingredient.ingredient_id}`}
              >
                <li>{`${ingredient.amount} ${ingredient.name}`}</li>
              </Link>
            )
          })}
        </ul>
        <h2>Instructions:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  )
}

export default Recipe
