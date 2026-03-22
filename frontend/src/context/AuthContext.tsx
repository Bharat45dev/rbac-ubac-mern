import { createContext, useContext, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);

  const login = async (email: string, password: string) => {
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  //  REGISTER FUNCTION
  const register = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    const res = await api.post("/auth/register", data);

    // If backend returns token after register
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);