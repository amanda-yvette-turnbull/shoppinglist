import { Recipe, Action } from '../../models/Recipes'
import { SET_RECIPES } from '../actions/recipes'

const initialState = [] as Recipe[]

export default function recipesReducer(state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case SET_RECIPES:
      return payload
    default:
      return state
  }
}
