import { combineReducers } from 'redux'
import pageReducer from './page'
import ingredientsReducer from './ingredients'
import recipesReducer from './recipes'

export default combineReducers({
  page: pageReducer,
  ingredients: ingredientsReducer,
  recipes: recipesReducer,
})
