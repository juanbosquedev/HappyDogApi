

function applyExtraSetup() {
    // const login = require("../models/login.model");
    // const register = require("../models/register.model");
  
  
	const { register, login } = sequelize.models;

    register.belongsToMany(login);
	login.belongsTo(register);
}

module.exports = { applyExtraSetup };
