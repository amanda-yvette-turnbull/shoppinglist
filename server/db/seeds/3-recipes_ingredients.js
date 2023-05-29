exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('recipes_ingredients').del()
  await knex('recipes_ingredients').insert([
    //avotoast
    {
      id: 8800,
      recipe_id: '9900',
      ingredient_id: '7701',
      amount: '1',
      other: '',
    },
    {
      id: 8801,
      recipe_id: '9900',
      ingredient_id: '7702',
      amount: '2 peicies',
      other: 'Toasted',
    },
    {
      id: 8802,
      recipe_id: '9900',
      ingredient_id: '7709',
      amount: '2',
      other: '',
    },
    //quesadilla
    {
      id: 8803,
      recipe_id: '9901',
      ingredient_id: '7700',
      amount: '3',
      other: '',
    },
    {
      id: 8804,
      recipe_id: '9901',
      ingredient_id: '7710',
      amount: '1',
      other: '',
    },
    {
      id: 8805,
      recipe_id: '9901',
      ingredient_id: '7708',
      amount: 'as much as you want',
      other: '',
    },
    //cauli tacos
    {
      id: 8806,
      recipe_id: '9902',
      ingredient_id: '7700',
      amount: '3',
      other: '',
    },
    {
      id: 8807,
      recipe_id: '9902',
      ingredient_id: '7703',
      amount: '1/2 head',
      other: '',
    },
    {
      id: 8808,
      recipe_id: '9902',
      ingredient_id: '7701',
      amount: 'optional guac',
      other: '',
    },
    //spinach lasanga
    {
      id: 8809,
      recipe_id: '9903',
      ingredient_id: '7705',
      amount: '1 box',
      other: 'precooked',
    },
    {
      id: 8810,
      recipe_id: '9903',
      ingredient_id: '7707',
      amount: '1',
      other: '',
    },
    {
      id: 8811,
      recipe_id: '9903',
      ingredient_id: '7706',
      amount: '1 cup',
      other: '',
    },
    {
      id: 8812,
      recipe_id: '9903',
      ingredient_id: '7708',
      amount: 'lots',
      other: '',
    },
  ])
}
