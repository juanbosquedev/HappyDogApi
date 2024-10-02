const { Router } = require("express");
const router = Router();

const { dogsController } = require("../../controllers/index");
const { newDog, dogDelete, dogUpdate, allDogs } = dogsController;

router.get("/", allDogs);
router.put("/:id", dogUpdate);
router.post("/", newDog);
router.delete("/:id", dogDelete);

module.exports = router;
