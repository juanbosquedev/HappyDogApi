const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const { POSTGRESQL_URL } = process.env;
const sequelize = new Sequelize(`${POSTGRESQL_URL}`);


const Login = sequelize.define(
  "Logins",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = {  Login };
