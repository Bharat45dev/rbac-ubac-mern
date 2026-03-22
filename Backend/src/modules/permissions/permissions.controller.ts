import { Request, Response } from "express";
import {
  createPermission,
  getPermissions,
  deletePermission,
} from "./permissions.service";

export const createPermissionHandler = async (req: Request, res: Response) => {
  const permission = await createPermission(req.body);
  res.status(201).json(permission);
};

export const getPermissionsHandler = async (_: Request, res: Response) => {
  const permissions = await getPermissions();
  res.json(permissions);
};

export const deletePermissionHandler = async (req: Request, res: Response) => {
  await deletePermission(req.params.id as string);
  res.json({ message: "Permission deleted" });
};