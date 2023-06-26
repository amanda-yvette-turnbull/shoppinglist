import { Ingredient } from '../../models/Ingredients'

import * as api from '../apis/ingredientsApi'
import { ThunkAction } from '../store'

export const SET_INGREDIENTS = 'SET_INGREDIENTS'

//* Simple Actions
export function setIngredients(ingredients: Ingredient[]) {
  return {
    type: SET_INGREDIENTS,
    payload: ingredients,
  }
}

//* Thunk Actions
export function getIngredients(): ThunkAction {
  return async (dispatch) => {
    try {
      const ingredients = await api.fetchIngredients()
      console.log(ingredients)
      dispatch(setIngredients(ingredients))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}
