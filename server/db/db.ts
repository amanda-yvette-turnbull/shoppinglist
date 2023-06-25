import connection from './connection'

const db = connection

module.exports = {
  getRecipes,
  getRecipe,
  getIngredients,
  getIngredient,
  getIngredientsByRecipe,
  getRecipesByIngredient,
}

//Recipies
function getRecipes() {
  return db('recipes').select()
}

function getRecipe(id: number) {
  return db('recipes').select().where('id', id).first()
}

function getIngredientsByRecipe(id: number) {
  return db('recipes')
    .join('recipes_ingredients', 'recipes.id', 'recipes_ingredients.recipe_id')
    .join('ingredients', 'recipes_ingredients.ingredient_id', 'ingredients.id')
    .select('recipes.name AS recipe_name', '*')
    .where('recipe_id', id)
}

//Ingredients
function getIngredients() {
  return db('ingredients').select()
}

function getIngredient(id: number) {
  return db('ingredients').where('id', id)
}

function getRecipesByIngredient() {
  return db('ingredients')
    .join(
      'recipes_ingredients',
      'ingredients.id',
      'recipes_ingredients.ingredients_id'
    )
    .join('recipes', 'recipes_ingredients.recipes_id', 'recipes.id')
    .select('ingredients.name AS ingredients_name', '*')
}

//Shoppinglist
// function getAllRecipies() {}

//db diagram
//https://dbdiagram.io/d/647451e67764f72fcf02dd27
