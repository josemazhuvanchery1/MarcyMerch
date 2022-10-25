// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'Marcy-Merch',
      user:     'aneika',
      password: '2311'
    }
   
  },

  production: {
    client: 'pg',
    connection: {
      database: 'Marcy-Merch',
      user:     'aneika',
      password: '2311'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
