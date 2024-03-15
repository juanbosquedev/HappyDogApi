const { Router } = require("express");
const {
  userLogin,
  userRegister,
  userLogout,
  allDogs,
  newDog,
  dogDelete,
  dogUpdate,
} = require("../controllers");

const router = Router();
//users
router.post("/userLogin/:id", userLogin);
router.post("/userLogout/:id", userLogout)
router.post("/userRegister", userRegister);

//dogs
router.get("/allDogs", allDogs);
router.post("/newDog", newDog );
router.put("/updateDog/:id", dogUpdate);
router.delete("/dogDelete/:id", dogDelete);



module.exports = router;
