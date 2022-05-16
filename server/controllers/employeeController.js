import Employee from "../models/employeeModel.js";

export const handleGetEmployee = async (req, res) => {
  const employees = await Employee.find({});
  res.status(200).json(employees);
};
export const handlePostEmployee = async (req, res) => {
  const employeeData = {
    name: req.body.name || "Annonymous",
    designation: req.body.designation || "Employee",
    offday: req.body.offday,
    phone: req.body.phone || "N/A",
    officeTime: req.body.officeTime || "N/A",
  };
  try {
    const employee = new Employee(employeeData);
    const createdEmployee = await employee.save();
    return res.status(201).json(createdEmployee);
  } catch (error) {
    res.status(500).json({ message: "Someting went wrong!" });
  }
};
