import jwtDecode from "jwt-decode";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@Kenzinho:token")) || "";

  const [auth, setAuth] = useState(token);

  const signIn = (data, history) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        toast.info(`Bem vindo ${data.username}`);
        const { access } = response.data;
        const decoded = jwtDecode(access);
        localStorage.setItem("@Kenzinho:token", JSON.stringify(access));
        setAuth(access);
        history.push("/dashboard", { data: decoded.user_id });
      })
      .catch((err) =>
        toast.error(
          "Não foi possível fazer o login. Verifique dados informados"
        )
      );
  };

  return (
    <AuthContext.Provider value={{ token: auth, setAuth, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
