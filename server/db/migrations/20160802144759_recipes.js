exports.up = (knex) => {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('image')
    table.text('instructions')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('recipes')
}
