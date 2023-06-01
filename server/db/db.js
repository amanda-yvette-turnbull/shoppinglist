const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRecipes,
  getRecipe,
  getIngredients,
  getIngredientsByRecipe,
}

//Recipies
function getRecipes(db = connection) {
  return db('recipes').select()
}

function getRecipe(id, db = connection) {
  return db('recipes').select().where('id', id).first()
}

function getIngredientsByRecipe(id, db = connection) {
  return db('recipes')
    .join('recipes_ingredients', 'recipes.id', 'recipes_ingredients.recipe_id')
    .join('ingredients', 'recipes_ingredients.ingredient_id', 'ingredients.id')
    .select('recipes.name AS recipe_name', '*')
}

//Ingredients
function getIngredients(db = connection) {
  return db('ingredients').select()
}

// function getIngredient() {}

//Shoppinglist
// function getAllRecipies() {}

//db diagram
//https://dbdiagram.io/d/647451e67764f72fcf02dd27
