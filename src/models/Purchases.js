const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const { POSTGRESQL_URL } = process.env;
const sequelize = new Sequelize(`${POSTGRESQL_URL}`);

const Purchases = sequelize.define(
  "Purchases",
  {
    idTable: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    userID: {
      type: DataTypes.INTEGER,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Purchases;
