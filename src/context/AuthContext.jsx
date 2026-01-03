import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const login = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin1234") {
      setIsAuth(true);
      setRole("admin");
      navigate("/admin/dashboard");
    } 
    else if (email === "customer@gmail.com" && password === "customer1234") {
      setIsAuth(true);
      setRole("customer");
      navigate("/customers/dashboard");
    } 
    else {
      alert("Invalid credentials");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, role, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
