exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('ingredients').del()
  await knex('ingredients').insert([
    { id: 7700, name: 'tortilla' },
    { id: 7701, name: 'avocado' },
    { id: 7702, name: 'bread' },
    { id: 7703, name: 'cauliflower' },
    { id: 7704, name: 'spinach' },
    { id: 7705, name: 'pasta sheets' },
    { id: 7706, name: 'ricotta' },
    { id: 7707, name: 'canned tomatoes' },
    { id: 7708, name: 'cheese' },
    { id: 7709, name: 'egg' },
    { id: 7710, name: 'canned beans' },
  ])
}
