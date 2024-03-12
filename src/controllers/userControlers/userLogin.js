

const { Register } = require("../../database/database");

module.exports = async (req, res) => {


  try {
    
    const test = await Register.findAll();
  
    
    return res.status(200).send(test);

    // if (test.length === 0) {
    //   await login.bulkCreate(loginToCreate);
    // }

    // const { user, password } = req.body;
    // const userFromDB = await login.findOne({ where: { user, password } });

    // if (userFromDB) {
    //   userFromDB.logged = true;
    //   await userFromDB.save();
    //   return res.status(200).send(userFromDB);
    // } else {
    //   const userData = { user, password, logged: false };
    //   return res.status(401).send(userData);
    // }
  } catch (error) {
    res.status(500).send("Error interno del servidor");
  }
};
