const { Sequelize } = require("sequelize");
const { applyExtraSetup } = require("./extra-setup");

const sequelize = new Sequelize(process.env.POSTGRESQL_URL, {
  host: process.env.DB_HOST,
  dialect: "postgres",
  logging: true,
});

const {Login} = require("../models");
const {Register} = require("../models");
const {DogsRecord }= require("../models");

const Logins = Login(sequelize, Sequelize);
const Registers = Register(sequelize, Sequelize);
const Dogs = DogsRecord(sequelize, Sequelize);

// const { register, login } = sequelize.models;

// register.belongsToMany(login);
// login.belongsTo(register);
// Exporta los modelos y la instancia de Sequelize
module.exports = {
  Registers,
  Logins,
  Dogs,
  sequelize,
};
