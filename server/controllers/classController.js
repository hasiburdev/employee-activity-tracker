import Class from "../models/classModel.js";

export const handleGetClass = async (req, res) => {
  const classes = await Class.find({});
  res.status(200).json(classes);
};
export const handlePostClass = async (req, res) => {
  const classData = {
    batchName: req.body.batchName || "N/A",
    time: req.body.time || "N/A",
    room: req.body.room || "N/A",
  };
  try {
    const classObj = new Class(classData);
    const createdClass = await classObj.save();
    return res.status(201).json(createdClass);
  } catch (error) {
    res.status(500).json({ message: "Someting went wrong!" });
  }
};
