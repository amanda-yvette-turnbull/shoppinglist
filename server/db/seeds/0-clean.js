exports.seed = (knex) => {
  const empty = (table) => knex(table).delete()

  return empty('recipes_ingredients')
    .then(() => empty('recipes'))
    .then(() => empty('ingredients'))
}
