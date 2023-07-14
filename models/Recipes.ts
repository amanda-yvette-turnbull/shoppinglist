import Ingredients from '../client/components/Ingredients'

export interface Recipe {
  id: number
  name: string
  image: string
  instructions: string
  ingredients?: RecipeIngredients[]
}

export interface RecipeIngredients {
  recipe_name: string
  id: number
  name: string
  image: string
  instructions: string
  recipe_id: number
  ingredient_id: number
  amount: string
  other: string
}

export type Action = { type: 'SET_RECIPES'; payload: Recipe[] }
