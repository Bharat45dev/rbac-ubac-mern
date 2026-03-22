import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { hasPermission } from "../../utils/hasPermission";

export default function ManagerDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="dashboard manager">
      <h1>Manager Dashboard</h1>

      <div className="features">

        {hasPermission(user, "Reports", "Read") && (
          <button onClick={() => navigate("/reports")}>
            View Reports
          </button>
        )}

        {hasPermission(user, "Dashboard", "View") && (
          <button onClick={() => navigate("/dashboard")}>
            Dashboard Overview
          </button>
        )}

      </div>
    </div>
  );
}