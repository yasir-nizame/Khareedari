import express from "express";
import {
  registercontroller,
  loginController,
  testcontroller,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  orderStatusController,
  getAllOrdersController,
} from "../controllers/authcontroller.js";
import { isAdmin, requireLogin } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing

//test controller   //checks token  //checks ADMIN
router.get("/test", requireLogin, isAdmin, testcontroller);

//register
router.post("/register", registercontroller);

//login
router.post("/login", loginController);

//forgot password
router.post("/forgot-password", forgotPasswordController);

//protected routes

// user
router.get("/user-auth", requireLogin, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

// admin
router.get("/admin-auth", requireLogin, isAdmin, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

//  Update Profile

router.put("/profile", requireLogin, updateProfileController);

//get orders
router.get("/orders", requireLogin, getOrdersController);

//all orders
router.get("/all-orders", requireLogin, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireLogin,
  isAdmin,
  orderStatusController
);

export default router;
