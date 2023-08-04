exports.seed = async function (knex) {
  await knex('shopping_list').del()
  await knex('shopping_list').insert([
    { id: 1, ingredient: 'avocado' },
    { id: 2, ingredient: 'bread' },
    { id: 3, ingredient: 'egg' },
  ])
}
