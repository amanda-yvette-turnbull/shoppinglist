import express from 'express'
const router = express.Router()
import * as db from '../db/db'

router.get('/', async (req, res) => {
  const recipes = await db.getRecipes()
  res.json(recipes)
})

//TODO fix this
// router.get('/:id', async (req, res) => {
//   const idNum = +req.params.id
//   const recipe = await db.getRecipe(idNum)
//   recipe.ingredients = await db.getIngredientsByRecipe(idNum)
//   res.json(recipe)
// })

export default router
