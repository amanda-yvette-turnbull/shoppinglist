import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Ingredient as IngredientModel } from '../../models/Ingredients'
import { fetchIngredient } from '../apis/ingredientsApi'

function Ingredient() {
  const [ingredient, setIngredient] = useState({} as IngredientModel)
  const { id } = useParams()

  useEffect(() => {
    const getRecipe = async () => {
      const ingredientData = await fetchIngredient(Number(id))
      setIngredient(ingredientData[0])
    }
    getRecipe()
  }, [id])

  console.log(ingredient)

  return (
    <div>
      <h1>{`Recipes that use ${ingredient.name}`}</h1>
    </div>
  )
}

export default Ingredient
