const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRecipes,
  getRecipe,
}

function getRecipes(db = connection) {
  return db('recipes').select()
}

function getRecipe(id, db = connection) {
  return db('recipes').select().where('id', id).first()
}

// function getUser(id, db = connection) {
//   return db('ingredients').where('id', id).first()
// }

//https://dbdiagram.io/d/647451e67764f72fcf02dd27
