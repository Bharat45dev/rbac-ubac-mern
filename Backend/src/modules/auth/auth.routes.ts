import { Router } from "express";
import { register, login, assignRolePermissions } from "./auth.controller";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/assign-role-permissions", assignRolePermissions);

export default router;