// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './config/db.sqlite'
    },
    migrations: {
      directory: './migrations'
    },
    useNullAsDefault: true,
  },

};
