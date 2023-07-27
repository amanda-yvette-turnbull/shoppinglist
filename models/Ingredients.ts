export interface Ingredient {
  id: number
  name: string
  recipes?: IngredientRecipes[]
}

export interface IngredientRecipes {
  recipe_name: string
  id: number
  name: string
  image: string
  instructions: string
  recipe_id: number
  ingredient_id: number
  amount: number
  other: string
}

export type Action = { type: 'SET_INGREDIENTS'; payload: Ingredient[] }
