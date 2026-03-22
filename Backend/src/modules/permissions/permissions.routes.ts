import { Router } from "express";
import {
  createPermissionHandler,
  getPermissionsHandler,
  deletePermissionHandler,
} from "./permissions.controller";
import { authMiddleware } from "../../middleware/auth.middleware";
import { checkPermission } from "../../middleware/permission.middleware";

const router = Router();

router.post(
  "/",
  authMiddleware,
  checkPermission("Permission", "Write"),
  createPermissionHandler
);

router.get(
  "/",
  authMiddleware,
  checkPermission("Permission", "Read"),
  getPermissionsHandler
);

router.delete(
  "/:id",
  authMiddleware,
  checkPermission("Permission", "Delete"),
  deletePermissionHandler
);

export default router;