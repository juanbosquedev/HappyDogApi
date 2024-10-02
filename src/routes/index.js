const { Router } = require("express");const {
    userLogin,
    userRegister,
    userLogout,
    allDogs,
    newDog,
    dogDelete,
    dogUpdate,
  } = require("../controllers");
  
const authenticate = require("../middleware/authenticate"); 

const router = Router();

// user
router.post("/userLogin", userLogin);
router.post("/userLogout", userLogout);
router.post("/userRegister", userRegister);

// dogs
router.get("/allDogs", allDogs);
router.post("/newDog", newDog);       
router.put("/updateDog/:id", dogUpdate); 
router.delete("/dogDelete/:id", dogDelete); 

module.exports = router;


