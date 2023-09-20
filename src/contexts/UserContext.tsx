import { createContext, ReactNode, useState } from 'react';
import { LoginUserResponse, UserProfile } from '../api/types';
import { loginUser } from '../api';
import { toast } from "react-toastify";

export interface UserContextProps {
     token: string | null;
     profile: UserProfile | null;
     isLogin: boolean;
     logining: boolean;
     login: (email: string, password: string) => void;
     logout: () => void; 
}

export const UserContext = createContext<UserContextProps>({
     token: null,
     profile: null,
     isLogin: false,
     logining: false,
     login: () => { },
     logout: () => {} 
});

export const UserProvider = (props: { children: ReactNode }) => {
     const [logining, setLogining] = useState(false);
     const [isLogin, setIsLogin] = useState<boolean>(localStorage.getItem("userToken") !== null);
     const [token, setToken] = useState<string | null>(localStorage.getItem("userToken"));
     const [profile, setProfile] = useState<UserProfile | null>(JSON.parse(localStorage.getItem("profile") || "null"));
     const login = (email: string, password: string) => {
          if (logining) return;
          setLogining(true);
          loginUser(email, password)
               .badRequest(() => toast ("Zły login lub hasło", {type: "error"}))
               .unauthorized(() => toast ("Zły login lub hasło", {type: "error"}))
               .json((res: LoginUserResponse) => {
                    const { token, user } = res;
                    setToken(token);
                    setProfile(user);
                    localStorage.setItem("userToken", token);
                    localStorage.setItem("profile", JSON.stringify(user));
                    setIsLogin(true);
               })
               .finally(() => setLogining(false));
     }
     const logout = () => {
          if(!isLogin) return;
          setToken(null);
          setProfile(null);
          setIsLogin(false);
          localStorage.removeItem("userToken");
          localStorage.removeItem("profile");
     };

     return (
          <UserContext.Provider value={{ logining, token, profile, isLogin: Boolean(profile), login, logout}}
          >
               {props.children}
          </UserContext.Provider>
     );
}