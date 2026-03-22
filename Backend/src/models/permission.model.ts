import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema(
  {
    module: { type: String, required: true },   // User / Dashboard / Role
    action: { type: String, required: true },   // Create / Read / Update / Delete / View
    name: { type: String, required: true, unique: true }, // USER_CREATE
  },
  { timestamps: true }
);

export default mongoose.model("Permission", permissionSchema);