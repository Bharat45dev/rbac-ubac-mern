import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import DashboardRouter from "./pages/dashboard/DashboardRouter";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardRouter />
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}