import { Request, Response } from "express";
import { assignPermissionsToRole } from "./roles.service";

export const assignPermissionsHandler = async (req: Request, res: Response) => {
  const role = await assignPermissionsToRole(
    req.params.id as string,
    req.body.permissionIds
  );

  res.json(role);
};