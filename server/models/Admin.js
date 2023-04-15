import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;
