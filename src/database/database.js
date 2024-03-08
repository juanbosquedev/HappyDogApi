require("dotenv").config();
const { DB_USER, DB_HOST, POSTGRESQL_URL } = process.env;
const { Sequelize } = require("sequelize");
const pg = require("pg");

const sequelize = new Sequelize(`${POSTGRESQL_URL}`, {
  dialect: pg,
  host: `${DB_HOST}`,
  dialectOptions: {
    ssl: true,
  },
  logging: false,
});

const { Users, Purchases } = sequelize.models;

module.exports = {
  conn: sequelize,
  Users,
  Purchases,
};
