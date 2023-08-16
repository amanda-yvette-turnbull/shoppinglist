exports.up = function (knex) {
  return knex.schema.createTable('shopping_list', (table) => {
    table.increments('id').primary()
    table.integer('recipe_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('shopping_list')
}
