import { useContext } from "react";
import { Button } from "../components/Button";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const EditProfilePage = () => {
     const { logout } = useContext(UserContext);
     const navigate = useNavigate();
     const handleLogout = () => {
          logout();
          navigate("/profile");  // Przekierowanie na stronę "Zaloguj się"
     }
     return (
          <div>
               <Button onClick={handleLogout} className="mt-24">
                    Wyloguj się
               </Button>
          </div>
     )
}
