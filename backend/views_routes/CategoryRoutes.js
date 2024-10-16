import express from "express";
import { isAdmin, requireLogin } from "./../middlewares/authMiddleware.js";
import {
  categoryControlller,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
} from "./../controllers/categoryController.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireLogin,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireLogin,
  isAdmin,
  updateCategoryController
);

//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireLogin,
  isAdmin,
  deleteCategoryCOntroller
);

export default router;
