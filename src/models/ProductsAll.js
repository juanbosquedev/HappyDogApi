const { DataTypes } = require("sequelize");


const ProductsAll = (sequelize) => {
  sequelize.define(
  "productsAll",
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
  );
};

module.exports = ProductsAll;
