const { Router } = require("express");
const router = Router();

const { usersController } = require("../../controllers/index");
const { userLogin, userLogout, userRegister } = usersController;

router.post("/userLogin", userLogin);
router.get("/userLogout", userLogout);
router.post("/userRegister", userRegister);

module.exports = router;
