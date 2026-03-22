export const hasPermission = (user: any, module: string, action: string) => {
  if (!user) return false;

  //  SAFE CHECK USER PERMISSIONS
  const userPerm = user.permissions?.find(
    (p: any) =>
      p?.permission?.module === module &&
      p?.permission?.action === action
  );

  if (userPerm) return userPerm.allowed;

  // SAFE CHECK ROLE PERMISSIONS
  const rolePerm = user.role?.permissions?.find(
    (p: any) =>
      p?.permission?.module === module &&
      p?.permission?.action === action
  );

  return rolePerm?.allowed || false;
};