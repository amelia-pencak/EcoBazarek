import { useState, useContext,useEffect  } from "react";
import { Content } from "../components"
import { Button } from "../components/Button";
import { TextField } from "../components/TextField";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const navigate = useNavigate();
     const { login, logining, isLogin } = useContext(UserContext);

     useEffect(() => {
          if (isLogin) {
              navigate("/edit-profile");
          }
      }, [isLogin, navigate]);

     return <Content title="Profil użytkownika" loading={logining} className="pl-[161px] pt-[136px] text-bistre-brown bg-grey-white">
          {!isLogin && (
               <>
               <div className="text-[48px] font-bold">ZALOGUJ SIĘ</div>
               <div className="mt-[38px]">
                   Email*
                   <TextField className=" w-[515px] h-[42px]" inputProps={{ type: "email", value: email, onChange: (e) => setEmail(e.target.value) }} />
    
              </div>
              <div className="mt-[38px]">
                   Hasło*
                   <TextField className="w-[515px] h-[42px]" inputProps={{ type: "password", value: password, onChange: (e) => setPassword(e.target.value) }} />
    
              </div>
              <div className="pt-16 pb-[189px] w-[515px] flex justify-end">
                   <Button onClick={() => navigate("/registration")} variant="text" className="w-[113px] h-10 mr-4 text-sm font-semibold">
                         Zarejestruj się
                    </Button>
                   <Button onClick={async () => await login(email, password)} className="w-[99px] h-10 text-sm font-semibold">
                         Zaloguj
                    </Button>
              </div>
              </>
               
            )}  


        
     </Content>
};