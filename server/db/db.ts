import Ingredients from '../../client/components/Ingredients'
import connection from './connection'
const db = connection

//* Recipes
export function getRecipes() {
  return db('recipes').select()
}

export function getRecipe(id: number) {
  return db('recipes').select().where('id', id).first()
}

export function getIngredientsByRecipe(id: number) {
  return db('recipes')
    .join('recipes_ingredients', 'recipes.id', 'recipes_ingredients.recipe_id')
    .join('ingredients', 'recipes_ingredients.ingredient_id', 'ingredients.id')
    .select('recipes.name AS recipe_name', '*')
    .where('recipe_id', id)
}

//* Ingredients
export function getIngredients() {
  return db('ingredients').select()
}

export function getIngredient(id: number) {
  return db('ingredients').where({ id })
}

export async function getRecipesByIngredient(id: number) {
  const all_recipes = await db('recipes')
    .join('recipes_ingredients', 'recipes.id', 'recipes_ingredients.recipe_id')
    .join('ingredients', 'recipes_ingredients.ingredient_id', 'ingredients.id')
    .select('recipes.name AS recipe_name', '*')

  return all_recipes.filter((ingredient) => ingredient.ingredient_id == id)
}

//TODO Shoppinglist
// export function getAllRecipes() {}

//? DB diagram
//? https://dbdiagram.io/d/647451e67764f72fcf02dd27
