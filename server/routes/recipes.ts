import express from 'express'
const router = express.Router()
import * as db from '../db/db'

//* GET /api/v1/recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await db.getRecipes()
    res.json(recipes)
  } catch (err) {
    console.log('db routes err:', err)
  }
})

//* GET /api/v1/recipes/:id
router.get('/:id', async (req, res) => {
  const idNum = +req.params.id
  try {
    const recipe = await db.getRecipe(idNum)
    recipe.ingredients = await db.getIngredientsByRecipe(idNum)
    res.json(recipe)
  } catch (err) {
    console.log('db routes err:', err)
  }
})

export default router
