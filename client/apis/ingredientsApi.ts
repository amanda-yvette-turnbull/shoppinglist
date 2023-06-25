import req from 'superagent'

const serverUrl = '/api/v1/ingredients'

// // Get all the Animals
// export function getAnimals() {
//   return req.get(`${serverUrl}/animals`).then((res) => {
//     return res.body
//   })
// }

// // Gets animals by ID
// export function getAnimalsById(id: number) {
//   return req.get(`${serverUrl}/animals/${id}`).then((res) => {
//     return res.body
//   })
// }

// // Gets animals by Nocturnal Boolean
// export function getAnimalsByNoc(noc: boolean) {
//   // noc must be 1 or 0
//   return req.get(`${serverUrl}/animals/nocturnal/${+noc}`).then((res) => {
//     return res.body
//   })
// }
