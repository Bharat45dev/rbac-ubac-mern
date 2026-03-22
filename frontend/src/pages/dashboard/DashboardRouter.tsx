import { useAuth } from "../../context/AuthContext";
import AdminDashboard from "./AdminDashboard";
import ManagerDashboard from "./ManagerDashboard";
import UserDashboard from "./UserDashboard";

export default function DashboardRouter() {
  const { user } = useAuth();

  if (user?.role?.name === "Admin") return <AdminDashboard />;
  if (user?.role?.name === "Manager") return <ManagerDashboard />;

  return <UserDashboard />;
}