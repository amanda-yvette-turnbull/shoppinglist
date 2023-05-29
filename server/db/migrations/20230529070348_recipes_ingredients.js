exports.up = function (knex) {
  return knex.schema.createTable('recipes_ingredients', (table) => {
    table.increments('id').primary()
    table.integer('recipe_id').references('recipes.id')
    table.integer('ingredient_id').references('ingredients.id')
    table.string('amount')
    table.string('other')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('recipes_ingredients')
}
