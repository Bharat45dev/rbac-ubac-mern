import Role from "../../models/role.model";

export const seedRoles = async () => {
  const roles = ["Admin", "Manager", "User"];

  for (const name of roles) {
    const exists = await Role.findOne({ name });
    if (!exists) {
      await Role.create({ name });
      console.log(`${name} role created`);
    }
  }
};