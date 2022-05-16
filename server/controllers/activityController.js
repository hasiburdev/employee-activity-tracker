import Activity from "../models/activityModel.js";

export const handleGetActivity = async (req, res) => {
  const activities = await Activity.find({});
  res.status(200).json(activities);
};
export const handlePostActivity = async (req, res) => {
  const activityData = {
    name: req.body.name || "Annonymous",
    designation: req.body.designation || "Activity",
    offday: req.body.offday,
    phone: req.body.phone || "N/A",
  };
  try {
    const activity = new Activity(activityData);
    const createdActivity = await activity.save();
    return res.status(201).json(createdActivity);
  } catch (error) {
    res.status(500).json({ message: "Someting went wrong!" });
  }
};
