import {
  ReactNode,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";
import { IContextType, IUser } from "../types/index";
import { useNavigate } from "react-router-dom";
export const INITIAL_USER = {
  id: "",
  name: "",
  username: "",
  email: "",
  imageUrl: "",
  bio: "",
};
const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
};

export const AuthContext = createContext<IContextType>(INITIAL_STATE);
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("cookieFallback") === "[]") {
      navigate("/sign-in");
    }
    checkAuthUser();
  }, []);

  const checkAuthUser = async () => {
    try {
      const currentUser = {
        name: "Phan Hien",
        id: "23",
        username: "hienlephan2003",
        email: "hienlephan2003@gmail.com",
        imageUrl: "",
      };
      if (currentUser) {
        setUser({
          name: currentUser.name,
          id: currentUser.id,
          username: currentUser.username,
          email: currentUser.email,
          imageUrl: currentUser.imageUrl,
        });
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (err) {
      console.log(err);
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  const value = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext);
