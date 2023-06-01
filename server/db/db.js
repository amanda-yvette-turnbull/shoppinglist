const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRecipes,
  getRecipe,
  getIngredients,
}

//Recipies
function getRecipes(db = connection) {
  return db('recipes').select()
}

function getRecipe(id, db = connection) {
  return db('recipes').select().where('id', id).first()
}

//Ingredients
function getIngredients(db = connection) {
  return db('ingredients').select()
}

function getIngredient() {}

//Shoppinglist
function getAllRecipies() {}

//db diagram
//https://dbdiagram.io/d/647451e67764f72fcf02dd27
