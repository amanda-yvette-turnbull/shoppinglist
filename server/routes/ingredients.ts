import express from 'express'
const router = express.Router()
import * as db from '../db/db'

//*ingredient routes
router.get('/', async (req, res) => {
  const ingredients = await db.getIngredients()
  res.json(ingredients)
})

//TODO fix this
// router.get('/:id', async (req, res) => {
//   const idNum = +req.params.id
//   const ingredient = await db.getIngredient(idNum)
//   //! ingredient.recipe = await db.getRecipesByIngredient(idNum)
//   res.json(ingredient)
// })

export default router
