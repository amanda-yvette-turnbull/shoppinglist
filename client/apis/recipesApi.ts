import request from 'superagent'

const serverUrl = '/api/v1/recipes'

export async function fetchRecipes() {
  const res = await request.get(serverUrl)
  return res.body
}

export async function fetchRecipe(id: number) {
  const res = await request.get(`${serverUrl}/${id}`)
  return res.body
}

//TODO make post patch del
