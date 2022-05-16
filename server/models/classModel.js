import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  batchName: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Class", classSchema);
