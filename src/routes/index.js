const { Router } = require("express");
const {
  // userLogin,
  // userPurchase,
  productsAll,
  // purchaseById,
  // getPurchases,
  // deletePurchases,
  // deleteUserPurchase,
} = require("../controllers");

const router = Router();

router.get("/productsAll", productsAll);
// router.get("/userPurchase/:userID", purchaseById);
// router.get("/getPurchases", getPurchases);
// router.post("/userLogin", userLogin);
// router.post("/userPurchase", userPurchase);
// router.delete("/userPurchase/:id", deleteUserPurchase);

module.exports = router;
