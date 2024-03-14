const { Sequelize } = require("sequelize");
const { applyExtraSetup } = require('./extra-setup');


const sequelize = new Sequelize(process.env.POSTGRESQL_URL, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
});

const RegisterModel = require('../models/Register');
const LoginModel = require('../models/Login');

const Register = RegisterModel(sequelize, Sequelize);
const Login = LoginModel(sequelize, Sequelize);

  
// const { register, login } = sequelize.models;

// register.belongsToMany(login);
// login.belongsTo(register);
// Exporta los modelos y la instancia de Sequelize
module.exports = {
  Register,
  Login,
  sequelize,
};
