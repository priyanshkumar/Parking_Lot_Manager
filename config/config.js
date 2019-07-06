require("dotenv").config();

const config = {
  development: {
    username: process.env.user,
    password: process.env.Password,
    database: process.env.database,
    host: process.env.host,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
module.exports = config;
