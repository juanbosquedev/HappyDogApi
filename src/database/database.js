const { Sequelize } = require("sequelize");
const { applyExtraSetup } = require('./extra-setup');

// Importa los modelos
const RegisterModel = require('../models/Register');
const LoginModel = require('../models/Login');

// Crear instancia de Sequelize
const sequelize = new Sequelize(process.env.POSTGRESQL_URL, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: true,
});

// Define los modelos
const Register = RegisterModel(sequelize, Sequelize);
const Login = LoginModel(sequelize, Sequelize);

// Aplica configuraciones adicionales, si las hay
// applyExtraSetup(sequelize);

// Exporta los modelos y la instancia de Sequelize
module.exports = {
  Register,
  Login,
  sequelize,
};
