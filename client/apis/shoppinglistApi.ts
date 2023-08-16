import request from 'superagent'

const serverUrl = '/api/v1/shoppinglist'

export async function fetchShoppingList() {
  try {
    const res = await request.get(serverUrl)
    return res.body
  } catch (err) {
    return err
  }
}

export async function addShoppingList(recipies: number[]) {
  try {
    const res = await request.post(serverUrl)
    return res.body
  } catch (err) {
    return err
  }
}

export async function removeShoppingList() {
  const res = await request.get(serverUrl)
  return res.body
}
