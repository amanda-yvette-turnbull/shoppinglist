import express from 'express'
const router = express.Router()
import * as db from '../db/db'

//* GET /api/v1/ingredients
router.get('/', async (req, res) => {
  try {
    const ingredients = await db.getIngredients()
    res.json(ingredients)
  } catch (err) {
    console.log('db routes err:', err)
  }
})

//* GET /api/v1/ingredients/:id
router.get('/:id', async (req, res) => {
  const idNum = +req.params.id
  try {
    const ingredient = await db.getIngredient(idNum).first()
    ingredient.recipes = await db.getRecipesByIngredient(idNum)
    res.json(ingredient)
  } catch (err) {
    console.log('db routes err:', err)
  }
})

export default router
