const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const { POSTGRESQL_URL } = process.env;
const sequelize = new Sequelize(`${POSTGRESQL_URL}`);

const Register = sequelize.define(
  "Registers",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passwordValidate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { Register };
