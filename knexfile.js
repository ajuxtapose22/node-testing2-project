module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/dev.sqlite3'
        },
        useNullAsDefault: true, // SQLite specific 
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: './data/seeds'
        },
        pool: {
            afterCreate: (conn, done) => {
                conn.run('PRAGMA foreign_keys = ON', done) // SQlite specific 
                // enforce referential integrity 
            }
        }
    },
    testing: {
        client: 'sqlite3',
        connection: {
          filename: ':memory:' // In-memory database for testing
        },
        useNullAsDefault: true,
        migrations: {
          directory: './data/migrations'
        },
        seeds: {
          directory: './data/seeds'
        },
        pool: {
          afterCreate: (conn, done) => {
            conn.run('PRAGMA foreign_keys = ON', done) // enforce foreign keys
          }
        }
      }
}