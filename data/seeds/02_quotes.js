/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('quotes').del()
  await knex('quotes').insert([
    { id: 1, quote: 'You have power over your mind - not outside events. Realize this, and you will find strength.', author: 'Marcus Aurelius' },
    { id: 2, quote: 'It is not the man who has too little, but the man who craves more, that is poor.', author: 'Seneca' },
    { id: 3, quote: 'We suffer more in imagination than in reality.', author: 'Seneca' },
    { id: 4, quote: 'First say to yourself what you would be; and then do what you have to do.', author: 'Epictetus' },
    { id: 5, quote: 'The happiness of your life depends upon the quality of your thoughts.', author: 'Marcus Aurelius' },
    { id: 6, quote: 'Man is disturbed not by things, but by the views he takes of them.', author: 'Epictetus' }
  ]);
};
