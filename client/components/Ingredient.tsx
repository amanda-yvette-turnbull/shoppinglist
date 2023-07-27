import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Ingredient as IngredientModel } from '../../models/Ingredients'
import { fetchIngredient } from '../apis/ingredientsApi'

function Ingredient() {
  const [ingredient, setIngredient] = useState({} as IngredientModel)
  const { id } = useParams()

  useEffect(() => {
    const getRecipe = async () => {
      const ingredientData = await fetchIngredient(Number(id))
      setIngredient(ingredientData)
    }
    getRecipe()
  }, [id])

  return (
    <div>
      <h1>{`Recipes that use ${ingredient.name}`}</h1>
      {ingredient.recipes?.map((recipe) => {
        return (
          <Link to={`/recipes/${recipe.recipe_id}`} key={recipe.recipe_id}>
            <div className="one-recipe">
              <img
                className="img-cirlce"
                src={`/images${recipe.image}`}
                alt={recipe.recipe_name}
              />
              <p>{recipe.recipe_name}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Ingredient
