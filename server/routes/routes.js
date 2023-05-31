const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', async (req, res) => {
  const recipes = await db.getRecipes()
  const data = { recipes: recipes }
  res.render('home', data)
})

module.exports = router

//<img class="img-circle" src="{{image}}" alt="{{name}}">
