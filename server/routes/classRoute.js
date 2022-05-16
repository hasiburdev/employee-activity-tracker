import express from "express";
import {
  handleGetClass,
  handlePostClass,
} from "../controllers/classController.js";

const router = express.Router();

router.get("/", handleGetClass);
router.post("/", handlePostClass);

export default router;
