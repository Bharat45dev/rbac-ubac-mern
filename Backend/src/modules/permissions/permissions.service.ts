import Permission from "../../models/permission.model";

export const createPermission = async (data: any) => {
  return Permission.create(data);
};

export const getPermissions = async () => {
  return Permission.find();
};

export const deletePermission = async (id: string) => {
  return Permission.findByIdAndDelete(id);
};