// Update with your config settings.

module.exports = {
  client: process.env.CLIENT,
  connection: process.env.DATABASE_URL || {
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB
  }
};