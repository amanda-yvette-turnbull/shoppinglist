import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../hooks/hook'
import { Link } from 'react-router-dom'
import { setPage } from '../actions/page'

import { Ingredient as IngredientModel } from '../../models/Ingredients'
import { fetchIngredient } from '../apis/ingredientsApi'

function Ingredient() {
  const dispatch = useAppDispatch()

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
    <div className="page">
      <h1 className="ingredient-title">{`${ingredient.name} recipes:`}</h1>
      {ingredient.recipes?.map((recipe) => {
        return (
          <Link
            to={`/recipes/${recipe.recipe_id}`}
            onClick={() => dispatch(setPage('recipes'))}
            key={recipe.recipe_id}
          >
            <div className="single-recipe">
              <img
                className="recipe-img"
                src={`/images${recipe.image}`}
                alt={recipe.recipe_name}
              />
              <p className="recipe-name">{recipe.recipe_name}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Ingredient
