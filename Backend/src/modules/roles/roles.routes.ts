import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware";
import { checkPermission } from "../../middleware/permission.middleware";
import { assignPermissionsHandler } from "./roles.controller";

const router = Router();

router.put(
  "/:id/permissions",
  authMiddleware,
  checkPermission("Role", "Write"),
  assignPermissionsHandler
);

export default router;