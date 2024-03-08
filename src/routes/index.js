const { Router } = require("express");
const {
  userLogin,
  userPurchase,
  productsAll,
  purchaseById,
  getPurchases,
  deletePurchases,
  deleteUserPurchase,
} = require("../controllers");

const router = Router();

router.post("/userLogin", userLogin);
router.post("/userPurchase", userPurchase);
router.get("/productsAll", productsAll);
router.get("/userPurchase/:userID", purchaseById);
router.get("/getPurchases", getPurchases);
router.delete("/userPurchase/:id", deleteUserPurchase);

module.exports = router;
