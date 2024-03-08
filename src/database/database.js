require("dotenv").config();
const { Sequelize } = require("sequelize");
const UserFunction = require("../models/Users");
const PurchaseFunction = require("../models/Purchases");

const { DB_USER, DB_HOST, POSTGRESQL_URL } = process.env;

const sequelize = new Sequelize(`${POSTGRESQL_URL}`, {
  dialect: `${DB_USER}`,
  host: `${DB_HOST}`,
  dialectOptions: {
    ssl: true,
  },
  logging: false,
});
UserFunction(sequelize);
PurchaseFunction(sequelize);
const { Users, Purchases } = sequelize.models;
Users.belongsToMany(Purchases, { through: "usuario_purchase" });
Purchases.belongsToMany(Users, { through: "usuario_purchase" });

module.exports = {
  conn: sequelize,
  Users,
  Purchases,
};
