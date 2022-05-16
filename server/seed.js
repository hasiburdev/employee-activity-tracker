import mongoose from "mongoose";
import dotenv from "dotenv";

import Employee from "./models/employeeModel.js";
import Activity from "./models/activityModel.js";
import Class from "./models/classModel.js";

import employeeData from "./data/employeeData.js";
import activityData from "./data/activityData.js";
import classData from "./data/classData.js";

dotenv.config();

const DB_URL =
  process.env.MONGO_DB_URL || "mongodb://localhost:27017/employeeActivity";

const seedData = async () => {
  await mongoose.connect(DB_URL);
  console.log("Database Connected!");
  await Employee.deleteMany({});
  await Employee.insertMany(employeeData);
  await Activity.deleteMany({});
  await Activity.insertMany(activityData);
  await Class.deleteMany({});
  await Class.insertMany(classData);
  console.log("Seeding Done");
};

seedData();
