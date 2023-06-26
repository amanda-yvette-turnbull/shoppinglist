import { Ingredient, Action } from '../../models/Ingredients'
import { SET_INGREDIENTS } from '../actions/ingredients'

const initialState = [] as Ingredient[]

export default function ingredientsReducer(
  state = initialState,
  action: Action
) {
  const { type, payload } = action
  switch (type) {
    case SET_INGREDIENTS:
      return payload
    default:
      return state
  }
}
