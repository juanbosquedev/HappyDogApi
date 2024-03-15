module.exports = (sequelize, DataTypes) => {
  const Login = sequelize.define(
    "Login",
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
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      logged: {
        type: DataTypes.BOOLEAN,
    
      }
    },
    {
      timestamps: false,
    }
  );
  return Login;
};
