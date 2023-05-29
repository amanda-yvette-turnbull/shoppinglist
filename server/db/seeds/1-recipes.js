exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(() => {
      return knex('recipes').insert([
        {
          id: 9900,
          name: 'avo toast',
          image: '/avocado_toast.png',
          instructions: 'avo toast instructions',
        },
        {
          id: 9901,
          name: 'bean quesadilla',
          image: '/bean_quesadilla.png',
          instructions: 'bean quesadilla instructions',
        },
        {
          id: 9902,
          name: 'cauli tacos',
          image: '/cauliflower_tacos.png',
          instructions: 'cauli tacos instructions',
        },
        {
          id: 9903,
          name: 'spinach lasgna',
          image: '/spinach_lasgna.png',
          instructions: 'spinach lasgna instructions',
        },
      ])
    })
}
