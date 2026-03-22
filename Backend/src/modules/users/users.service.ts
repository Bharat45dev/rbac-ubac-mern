import User from "../../models/user.model";

export const getAllUsers = async () => {
  return User.find().populate("role permissions");
};

export const createUser = async (data: any) => {
  const user = await User.create(data);
  return user;
};

export const updateUserRole = async (userId: string, roleId: string) => {
  return User.findByIdAndUpdate(userId, { role: roleId }, { new: true });
};

export const deleteUser = async (id: string) => {
  return User.findByIdAndDelete(id);
};

export const overrideUserPermissions = async (
  userId: string,
  permissionIds: string[]
) => {
  return User.findByIdAndUpdate(
    userId,
    { permissions: permissionIds },
    { new: true }
  );
};

export const updateUserPermissions = async (
  userId: string,
  permissionIds: string[]
) => {
  return await User.findByIdAndUpdate(
    userId,
    { permissions: permissionIds },
    { new: true }
  ).populate("role permissions");
};