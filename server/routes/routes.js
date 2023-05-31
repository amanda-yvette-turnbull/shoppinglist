const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', async (req, res) => {
  const recipes = await db.getRecipes()
  res.render('home', { recipes: recipes })
})

router.get('/recipes/:id', async (req, res) => {
  const id = await req.params
  const recipe = await db.getRecipe(id)
  console.log(id)
  res.render('recipe', { recipe: recipe })
})

module.exports = router

//<img class="img-circle" src="{{image}}" alt="{{name}}">
