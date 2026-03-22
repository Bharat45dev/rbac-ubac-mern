import express from "express";
import { checkPermission } from "../middleware/permission.middleware";
import { authMiddleware } from "../middleware/auth.middleware";
const router = express.Router();

router.get(
  "/",
  authMiddleware,
  checkPermission("User", "Read"),
  (req, res) => {
    res.json({ message: "Users fetched" });
  }
);

router.post(
  "/",
  authMiddleware,
  checkPermission("User", "Write"),
  (req, res) => {
    res.json({ message: "User created" });
  }
);

export default router;