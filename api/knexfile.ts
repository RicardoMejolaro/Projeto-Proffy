// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'proffy',
      user: 'postgres',
      password: '',
    },
    migrations: {
      tableName: 'knex-migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
};