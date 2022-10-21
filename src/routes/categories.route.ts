import express from "express";
import { fetchCategories } from "../controllers/categories.controller";

const router = express.Router();

router.get("/", fetchCategories);

export default router;
