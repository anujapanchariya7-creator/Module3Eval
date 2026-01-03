import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

const login = (email, password) => {
  if (email === "admin@gmail.com" && password === "admin1234") {
    setIsAuth(true);
    setRole("admin");
    navigate("/admin/dashboard");
  } 
  else if (
    email === "customer@gmail.com" &&
    password === "customer1234"
  ) {
    setIsAuth(true);
    setRole("customer");
    navigate("/customers/dashboard");
  } 
  else {
    alert("Invalid Credentials");
  }
};

  const logout = () => {
    setIsAuth(false);
    setRole("");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuth, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};