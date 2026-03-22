import { Request, Response } from "express";
import { createUser, deleteUser, getAllUsers, overrideUserPermissions, updateUserPermissions, updateUserRole } from "./users.service";
import { ApiError } from "../../utils/ApiError";

export const fetchUsers = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  if (!users) throw new ApiError(404, "User not found");
  res.json(users);
};

export const addUser = async (req: Request, res: Response) => {
  const user = await createUser(req.body);
  res.status(201).json(user);
};

export const changeUserRole = async (req: Request, res: Response) => {
  const userId = req.params.id as string;
  const roleId = req.body.roleId as string;

  const user = await updateUserRole(userId, roleId);
  res.json(user);
};

export const removeUser = async (req: Request, res: Response) => {
  const userId = req.params.id as string;

  await deleteUser(userId);
  res.json({ message: "User deleted" });
};

export const overridePermissions = async (req: any, res: any) => {
  const userId = req.params.id as string;
  const { permissionIds } = req.body;

  const user = await overrideUserPermissions(userId, permissionIds);
  res.json(user);
};

export const changeUserPermissions = async (req: Request, res: Response) => {
  const user = await updateUserPermissions(
    req.params.id as string,
    req.body.permissionIds
  );

  res.json(user);
};