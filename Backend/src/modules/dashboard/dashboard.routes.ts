import { Router } from "express";
import {
  adminDashboardHandler,
  managerDashboardHandler,
  userDashboardHandler,
} from "./dashboard.controller";

import { authMiddleware } from "../../middleware/auth.middleware";
import { checkPermission } from "../../middleware/permission.middleware";

const router = Router();

router.get(
  "/admin",
  authMiddleware,
  checkPermission("Dashboard", "View"),
  adminDashboardHandler
);

router.get(
  "/manager",
  authMiddleware,
  checkPermission("Dashboard", "View"),
  managerDashboardHandler
);

router.get(
  "/user",
  authMiddleware,
  checkPermission("Dashboard", "View"),
  userDashboardHandler
);

export default router;