import { combineReducers } from 'redux'
import pageReducer from './page'
import ingredientsReducer from './ingredients'
import recipesReducer from './recipes'
import shoppingListReducer from './shoppingList'

export default combineReducers({
  page: pageReducer,
  ingredients: ingredientsReducer,
  recipes: recipesReducer,
  shoppingList: shoppingListReducer,
})
