import { Recipe } from '../../models/Recipes'

import * as api from '../apis/recipesApi'
import { ThunkAction } from '../store'

export const SET_RECIPES = 'SET_RECIPES'

//* Simple Actions
export function setRecipes(recipes: Recipe[]) {
  return {
    type: SET_RECIPES,
    payload: recipes,
  }
}

//* Thunk Actions
export function getRecipes(): ThunkAction {
  return async (dispatch) => {
    try {
      const recipes = await api.fetchRecipes()
      dispatch(setRecipes(recipes))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}
