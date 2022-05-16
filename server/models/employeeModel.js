import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  offday: {
    type: String,
    required: true,
    default: "Sunday",
  },
  phone: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Employee", employeeSchema);
