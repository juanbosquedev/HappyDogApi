const { DogsRecord, User } = require("../index");

User.hasMany(DogsRecord,{
        foreignKey:'hostage_id',
        sourceKey:'id',
    });

DogsRecord.belongsTo(User, {
        foreignKey:'hostage_id',
        targetKey:'id'
    });