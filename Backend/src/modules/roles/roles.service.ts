import Role from "../../models/role.model";

export const assignPermissionsToRole = async (
  roleId: string,
  permissionIds: string[]
) => {
  return Role.findByIdAndUpdate(
    roleId,
    { permissions: permissionIds },
    { new: true }
  ).populate("permissions");
};