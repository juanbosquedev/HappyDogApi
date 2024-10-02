const { Sequelize } = require("sequelize");

let sequelize = new Sequelize(process.env.POSTGRESQL_URL, {
  host: process.env.DB_HOST,
  dialect: "postgres",
  logging: false,
});

module.exports = {
  sequelize,
};
