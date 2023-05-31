const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRecipes,
}

function getRecipes(db = connection) {
  return db('recipes').select()
}

// function getUser(id, db = connection) {
//   return db('ingredients').where('id', id).first()
// }

//https://dbdiagram.io/d/647451e67764f72fcf02dd27
