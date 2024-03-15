const { Router } = require("express");
const {
  userLogin,
  userRegister,
  userLogout,
  allDogs,
} = require("../controllers");

const router = Router();
//users
router.post("/userLogin", userLogin);
router.post("/userLogout", userLogout);//va con un update
router.post("/userRegister", userRegister);

//dogs
router.get("/allDogs", allDogs);

module.exports = router;
