import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { hasPermission } from "../../utils/hasPermission";

export default function AdminDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="dashboard admin">
      <h1>Admin Dashboard</h1>

      <div className="features">

        {hasPermission(user, "User", "Write") && (
          <button onClick={() => navigate("/admin/users")}>
            Manage Users
          </button>
        )}

        {hasPermission(user, "Settings", "Write") && (
          <button onClick={() => navigate("/admin/roles")}>
            Role Permissions
          </button>
        )}

        {hasPermission(user, "Settings", "Write") && (
          <button onClick={() => navigate("/admin/user-permissions")}>
            User Overrides
          </button>
        )}

      </div>
    </div>
  );
}