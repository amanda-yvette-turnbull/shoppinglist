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

export async function addShoppingList(recipes: number[]) {
  try {
    const res = await request.post(serverUrl).send(recipes)
    return res.body
  } catch (err) {
    return err
  }
}

export async function removeShoppingList() {
  try {
    await request.delete(serverUrl)
  } catch (err) {
    return err
  }
}
