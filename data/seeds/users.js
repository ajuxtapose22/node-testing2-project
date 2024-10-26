exports.seed = function(knex) {
  // Deletes ALL other exsisting data
  return knex('users').del()
    .then(function () {
      // Insert seed entries
      return knex('users').insert([
        { name: 'John Doe', email: 'john@example.com'},
        { name: 'Jane Doe', email: 'jane@example.com'}
      ])
    })
}