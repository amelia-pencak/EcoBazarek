import { TextField } from "../TextFiled";
import { useState } from "react";
import { subscribe } from "../api";
import { toast } from "react-toastify";
import { Button } from "../Button";

export const Subscribe = () => {
     const [subscription, setSubscription] = useState(false);
     const [email, setEmail] = useState("");
     const subscriptionHandler = () => {
          if (subscription) return;
          if (email) {
               setSubscription(true);
               subscribe(email)
                    .badRequest(() => toast("Niepoprawny adres e-mail", { type: "error" }))
                    .res(
                         () => toast("Dziękujemy za subskrybcję", { type: "success" })
                    )
                    .finally(() => setSubscription(false));
               setEmail("");
          }
          else {
               toast("Wpisz adres e-mail", { type: "info" });
          }

     }


     return (
          <div className="flex flex-row ">
            
               <TextField
                    inputProps={{ value: email, onChange: (e) => setEmail(e.target.value) }}
                    className="rounded w-[420px] h-[42px] mr-4"
               />
               <Button onClick={subscriptionHandler} className="w-[134px] h-[42px] rounded ml-[13px] bg-oregano-green text-white>">
                    Subskrybuj</Button>
          </div>
     )
};