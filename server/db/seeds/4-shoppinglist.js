exports.seed = async function (knex) {
  await knex('shopping_list').del()
  await knex('shopping_list').insert([{ id: 1, recipe_id: 9900 }])
}
