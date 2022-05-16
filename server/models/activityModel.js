import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Activity", activitySchema);
