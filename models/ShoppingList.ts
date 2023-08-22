import { Recipe } from './Recipes'

export interface ShoppingList {
  id: number
  recipe: number
}

export type Action =
  | {
      type: 'SET_SHOPPINGLIST'
      payload: Recipe[]
    }
  | { type: 'ADD_SHOPPINGLIST'; payload: number[] }
  | { type: 'REMOVE_SHOPPINGLIST'; payload: null }
