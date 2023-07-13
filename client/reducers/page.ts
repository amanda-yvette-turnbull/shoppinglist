import { Action } from '../../models/Page'
import { SET_PAGE } from '../actions/page'

const initialState = 'recipes'

export default function pageReducer(state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case SET_PAGE:
      return payload
    default:
      return state
  }
}
