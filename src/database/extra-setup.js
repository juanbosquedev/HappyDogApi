

function applyExtraSetup(sequelize) {

  
  
	const { register, login } = sequelize.models;

    register.belongsToMany(login);
	login.belongsTo(register);
}

module.exports = { applyExtraSetup };
