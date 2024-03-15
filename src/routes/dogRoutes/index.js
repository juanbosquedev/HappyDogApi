const { Router } = require("express");
const { userLogin, userRegister, userLogout } = require("../../controllers/dogControllers");

const router = Router();

router.post("/userLogin", userLogin);
router.get("/dogsAll", userLogout);

router.post("/userRegister", userRegister);

module.exports = router;
