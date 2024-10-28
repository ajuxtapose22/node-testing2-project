/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_quotes').del()
  await knex('user_quotes').insert([
    { id: 1, user_id: 1, quote_id: 1 }, // John Doe likes a Marcus Aurelius quote
    { id: 2, user_id: 1, quote_id: 3 }, // John Doe likes a Seneca quote
    { id: 3, user_id: 2, quote_id: 2 }, // Jane Smith likes a Seneca quote
    { id: 4, user_id: 2, quote_id: 5 }, // Jane Smith likes a Marcus Aurelius quote
    { id: 5, user_id: 3, quote_id: 4 }, // Alice Johnson likes an Epictetus quote
    { id: 6, user_id: 4, quote_id: 6 }  // Bob Brown likes another Epictetus quote
  ]);
};
