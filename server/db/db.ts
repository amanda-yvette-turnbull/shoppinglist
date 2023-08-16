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

//? Refact the select to this v
// .select(
//   'ingredients.id AS id',
//   'ingredients.name as name',
//   'amount',
//   'other'
// )

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

//* Shopping List
export function getShoppingList() {
  return db('shopping_list').select()
}

export function deleteShoppingList() {
  return db('shopping_list').delete()
}

export async function addShoppingList(recipe_id: number) {
  console.log(recipe_id)
  return db('shopping_list').insert({ recipe_id }).returning('*')
}
//? DB diagram
//? https://dbdiagram.io/d/647451e67764f72fcf02dd27
