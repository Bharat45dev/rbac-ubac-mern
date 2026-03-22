import Permission from "../../models/permission.model";

export const seedPermissions = async () => {
  const permissions = [
    { module: "User", action: "Create", name: "USER_CREATE" },
    { module: "User", action: "Read", name: "USER_READ" },
    { module: "User", action: "Update", name: "USER_UPDATE" },
    { module: "User", action: "Delete", name: "USER_DELETE" },

    { module: "Dashboard", action: "View", name: "DASHBOARD_ADMIN_VIEW" },
    { module: "Dashboard", action: "View", name: "DASHBOARD_MANAGER_VIEW" },
    { module: "Dashboard", action: "View", name: "DASHBOARD_USER_VIEW" },

    { module: "Permission", action: "Create", name: "PERMISSION_CREATE" },
    { module: "Permission", action: "Read", name: "PERMISSION_READ" },
    { module: "Permission", action: "Delete", name: "PERMISSION_DELETE" },

    { module: "Role", action: "Create", name: "ROLE_CREATE" },
    { module: "Role", action: "Read", name: "ROLE_READ" },
    { module: "Role", action: "Update", name: "ROLE_UPDATE" },
    { module: "Role", action: "Delete", name: "ROLE_DELETE" },
  ];

  for (const perm of permissions) {
    const exists = await Permission.findOne({ name: perm.name });
    if (!exists) {
      await Permission.create(perm);
      console.log(`${perm.name} permission created`);
    }
  }
};