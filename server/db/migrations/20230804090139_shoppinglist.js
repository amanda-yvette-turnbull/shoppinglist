exports.up = function (knex) {
  return knex.schema.createTable('shopping_list', (table) => {
    table.increments('id').primary()
    table.string('ingredient')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('shopping_list')
}
