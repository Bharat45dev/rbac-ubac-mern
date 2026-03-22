import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import authRoutes from "./modules/auth/auth.routes";
import { seedRoles } from "./modules/role/role.seed";
import { seedPermissions } from "./modules/permission/permission.seed";
import usersRoutes from "./modules/users/users.routes";
import roleRoutes from "./modules/roles/roles.routes";
import permissionRoutes from "./modules/permissions/permissions.routes";
import dashboardRoutes from "./modules/dashboard/dashboard.routes";
import { errorHandler } from "./middleware/error.middleware";



dotenv.config();
connectDB();
seedRoles();
seedPermissions();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/permissions", permissionRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use(errorHandler);


app.get("/", (req, res) => {
  res.send("API Running...");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});