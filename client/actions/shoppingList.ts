import * as api from '../apis/shoppingListApi'
import { ThunkAction } from '../store'

import { ShoppingList } from '../../models/ShoppingList'

export const SET_SHOPPINGLIST = 'SET_SHOPPINGLIST'
export const ADD_SHOPPINGLIST = 'ADD_SHOPPINGLIST'
export const REMOVE_SHOPPINGLIST = 'REMOVE_SHOPPINGLIST'

//* Simple Actions
export function setShoppingList(shoppingList: ShoppingList[]) {
  return {
    type: SET_SHOPPINGLIST,
    payload: shoppingList,
  }
}

export function addShoppingList(shoppingList: number[]) {
  return {
    type: ADD_SHOPPINGLIST,
    payload: shoppingList,
  }
}

export function removeShoppingList() {
  return {
    type: REMOVE_SHOPPINGLIST,
    payload: null,
  }
}

//* Thunk Actions
export function getShoppingList(): ThunkAction {
  return async (dispatch) => {
    try {
      const shoppingList = await api.fetchShoppingList()
      dispatch(setShoppingList(shoppingList))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}

export function newShoppingList(shoppingList: number[]): ThunkAction {
  return async (dispatch) => {
    try {
      const newShoppingList = await api.addShoppingList(shoppingList)
      dispatch(addShoppingList(newShoppingList))
    } catch (err) {
      console.log('action err:', err)
    }
  }
}

export function deleteShoppingList(): ThunkAction {
  return async (dispatch) => {
    try {
      await api.removeShoppingList()
      dispatch(removeShoppingList())
    } catch (err) {
      console.log('action err:', err)
    }
  }
}
