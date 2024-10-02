const { Router } = require("express");
const userRoutes = require("./userRoutes/index");
const dogRoutes = require("./dogRoutes/index");

const router = Router();

router.use("/user", userRoutes);
router.use("/dog", dogRoutes);

module.exports = router;
