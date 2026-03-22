import { Request, Response, NextFunction } from "express";
import userModel from "../models/user.model";
import roleModel from "../models/role.model";


export const checkPermission = (module: string, action: string) => {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;

      const user = await userModel.findById(userId)
        .populate("role")
        .populate("permissions.permission");

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      //  1. CHECK USER OVERRIDE (UBAC)
     const userPermission = (user.permissions as any[]).find(
  (p) =>
    p.permission?.module === module &&
    p.permission?.action === action
);

if (userPermission) {
  if (userPermission.allowed) return next();
  return res.status(403).json({ message: "Access Denied (User Override)" });
}

const role: any = await roleModel.findById(user.role).populate({
  path: "permissions.permission",
  model: "Permission",
});

const rolePermission = (role.permissions as any[]).find(
  (p) =>
    p.permission?.module === module &&
    p.permission?.action === action
);

if (rolePermission?.allowed) {
  return next();
}

      return res.status(403).json({ message: "Access Denied (Role)" });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server Error" });
    }
  };
};