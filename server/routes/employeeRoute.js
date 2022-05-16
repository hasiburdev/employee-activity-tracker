import express from "express";
import {
  handleGetUser,
  handlePostUser,
} from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", handleGetUser);
router.post("/", handlePostUser);

export default router;
