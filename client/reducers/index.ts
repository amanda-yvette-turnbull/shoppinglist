import { combineReducers } from 'redux'
import ingredientsReducer from './ingredients'
import recipesReducer from './recipes'

export default combineReducers({
  ingredients: ingredientsReducer,
  recipes: recipesReducer,
})
