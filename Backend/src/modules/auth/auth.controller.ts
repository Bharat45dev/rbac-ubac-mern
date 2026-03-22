import { Request, Response } from "express";
import * as AuthService from "./auth.service";
import Role from "../../models/role.model";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await AuthService.registerUser(req.body);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const data = await AuthService.loginUser(email, password);
    res.json(data);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const assignRolePermissions = async (req: any, res: any) => {
  const { roleId, permissionIds } = req.body;

  const role = await Role.findByIdAndUpdate(
    roleId,
    { permissions: permissionIds },
    { new: true }
  );

  res.json(role);
};