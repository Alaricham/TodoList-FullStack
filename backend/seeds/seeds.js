exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(() => {
      // Inserts seed entries
      return knex('todos').insert([{
          id: 1,
          description: 'wash car',
          completed: true
        },
        {
          id: 2,
          description: 'walk dog',
          completed: false
        },
        {
          id: 3,
          description: 'buy groceries',
          completed: true
        }
      ]);
    });
};