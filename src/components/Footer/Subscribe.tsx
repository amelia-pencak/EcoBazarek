import { TextField } from "../TextFiled";
import { useState } from "react";
import { subscribe } from "../api";
import { toast } from "react-toastify";

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
          }
          else {
               toast("Wpisz adres e-mail", { type: "info" });
          }

     }


     return (
          // <div className="mt-[20px] mb-[15px] h-[42px] w-[580px]">
          <div className="flex flex-row ">
               {/* <TextField 
               className="rounded w-[420px] h-[42px] mr-[13px]"
                    inputProps={{ value: email, onChange: (e) => setEmail(e.target.value)}}
                   />  */}
               <TextField
                    inputProps={{ value: email, onChange: (e) => setEmail(e.target.value) }}
                    className="rounded w-[420px] h-[42px] mr-4"
               />
               <button onClick={subscriptionHandler} className="w-[134px] h-[42px] rounded ml-[13px] bg-oregano-green text-white>">
                    Subskrybuj</button>
          </div>
     )
};