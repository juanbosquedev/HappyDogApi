const { Router } = require("express");
const {
  userLogin,
  userRegister,
  userLogout,
  
} = require("../controllers");
const { alldogs, dogDelete, dogUpdate, newDog } = require("../../controllers");

const router = Router();
//users
router.post("/userLogin", userLogin);
router.get("/userLogout", userLogout);
router.post("/userRegister", userRegister);

//dogs
router.get("/alldogs", alldogs);
router.delete("/deletedog", dogDelete);
router.put("/updatedog", dogUpdate);
router.post("/newdog", newDog)


module.exports = router;
