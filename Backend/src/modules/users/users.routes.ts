import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware";
import { checkPermission } from "../../middleware/permission.middleware";

const router = Router();

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