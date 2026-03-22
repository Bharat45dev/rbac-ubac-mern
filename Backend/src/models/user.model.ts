import mongoose from "mongoose";
import "./role.model";
import "./permission.model";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },

    permissions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Permission",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);