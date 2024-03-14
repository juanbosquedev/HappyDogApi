const { Router } = require("express");
const {
  userLogin, userRegister, userLogout,

} = require("../controllers");

const router = Router();

router.post("/userLogin", userLogin);
router.get("/userLogout", userLogout);

router.post("/userRegister", userRegister );



module.exports = router;
