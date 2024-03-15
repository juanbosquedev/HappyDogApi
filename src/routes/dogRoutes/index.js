const { Router } = require("express");
const { userLogin, userRegister, userLogout } = require("../../controllers/dogControllers");

const router = Router();

router.post("/newDog", userLogin);
router.get("/dogsAll", userLogout);



module.exports = router;
