import { Action } from '../../models/ShoppingList'
import { Recipe } from '../../models/Recipes'

import {
  SET_SHOPPINGLIST,
  ADD_SHOPPINGLIST,
  REMOVE_SHOPPINGLIST,
} from '../actions/shoppingList'

const initialState = [] as Recipe[]

export default function shoppingListReducer(
  state = initialState,
  action: Action
) {
  const { type, payload } = action
  switch (type) {
    case SET_SHOPPINGLIST:
      return payload
    case ADD_SHOPPINGLIST:
      return state
    case REMOVE_SHOPPINGLIST:
      return null
    default:
      return state
  }
}
