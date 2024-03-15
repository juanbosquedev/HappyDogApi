const { Router } = require("express");
const {
  userLogin,
  userRegister,
  userLogout,
  alldogs,
} = require("../controllers");

const router = Router();
//users
router.post("/userLogin", userLogin);
router.get("/userLogout", userLogout);
router.post("/userRegister", userRegister);

//dogs
router.get("/alldogs", alldogs);

module.exports = router;
