import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { hasPermission } from "../../utils/hasPermission";

export default function UserDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="dashboard user">
      <h1>User Dashboard</h1>

      <div className="features">

        {hasPermission(user, "User", "Read") && (
          <button onClick={() => navigate("/profile")}>
            View Profile
          </button>
        )}

        {hasPermission(user, "Dashboard", "View") && (
          <button onClick={() => navigate("/dashboard")}>
            Dashboard
          </button>
        )}

      </div>
    </div>
  );
}