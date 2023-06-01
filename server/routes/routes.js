const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', async (req, res) => {
  const recipes = await db.getRecipes()
  res.render('home', { recipes: recipes })
})

router.get('/recipes/:id', async (req, res) => {
  const idNum = req.params
  const recipe = await db.getRecipe(idNum)
  console.log(idNum)
  res.render('recipe', { recipe: recipe })
})

module.exports = router

//<img class="img-circle" src="{{image}}" alt="{{name}}">
