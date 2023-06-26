import request from 'superagent'

const serverUrl = '/api/v1/ingredients'

export async function fetchIngredients() {
  const res = await request.get(serverUrl)
  return res.body
}

export async function fetchIngredient(id: number) {
  const res = await request.get(`${serverUrl}/${id}`)
  return res.body
}

//TODO make post patch del
