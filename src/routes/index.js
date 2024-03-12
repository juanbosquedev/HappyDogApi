const { Router } = require("express");
const {
  userLogin, userRegister,

} = require("../controllers");

const router = Router();

router.get("/userLogin", userLogin);
router.post("/userRegister", userRegister );



module.exports = router;
