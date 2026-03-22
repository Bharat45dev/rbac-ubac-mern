import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      setLoading(true);
      await login(email, password);
      toast.success("Login successful ");
      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Login to your account</p>

        <input
          style={styles.input}
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Signup Link */}
        <p style={styles.link} onClick={() => navigate("/signup")}>
          Don't have an account? Create Account
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "360px",
    padding: "32px",
    borderRadius: "10px",
    background: "#ffffff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column" as const,
    gap: "14px",
  },
  title: {
    margin: 0,
    fontSize: "22px",
    fontWeight: 600,
    textAlign: "center" as const,
  },
  subtitle: {
    margin: 0,
    fontSize: "13px",
    color: "#6b7280",
    textAlign: "center" as const,
    marginBottom: "10px",
  },
  input: {
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    outline: "none",
  },
  button: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#2563eb",
    color: "#ffffff",
    fontSize: "14px",
    cursor: "pointer",
    marginTop: "8px",
  },
  link: {
    fontSize: "13px",
    color: "#2563eb",
    textAlign: "center" as const,
    cursor: "pointer",
    marginTop: "10px",
  },
};