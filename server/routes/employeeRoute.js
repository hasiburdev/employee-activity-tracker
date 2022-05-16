import express from "express";
import {
  handleGetEmployee,
  handlePostEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", handleGetEmployee);
router.post("/", handlePostEmployee);

export default router;
