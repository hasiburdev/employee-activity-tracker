import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import employeeRouter from "./routes/employeeRoute.js";
import activityRouter from "./routes/activityRoute.js";
import classRouter from "./routes/classRoute.js";

const PORT = process.env.PORT || 8000;
const DB_URL =
  process.env.MONGO_DB_URL || "mongodb://localhost:27017/employeeActivity";

dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/employee", employeeRouter);
app.use("/api/v1/class", classRouter);
app.use("/api/v1/activity", activityRouter);

app.get("/", (req, res) => res.send("Working"));

app.listen(PORT, async () => {
  console.log(`Server Started on port: ${PORT}`);
  await mongoose.connect(DB_URL);
  console.log(`DB connected!`);
});
