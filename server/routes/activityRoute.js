import express from "express";
import {
  handleGetActivity,
  handlePostActivity,
} from "../controllers/activityController.js";

const router = express.Router();

router.get("/", handleGetActivity);
router.post("/", handlePostActivity);

export default router;
