import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "An admin must have a name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "An admin must have an email"],
    trim: true,
    unique: true,
  },
});

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

export default Admin;
