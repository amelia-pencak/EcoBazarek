import { useState } from "react";
import { sendMessage } from "../../api";
import { toast } from "react-toastify";
import { TextField } from "../TextFiled";
import './ContactStyle.css'
import { Button } from "../Button";

export const WriteMessageContact = () => {
     const [fullName, setFullName] = useState("");
     const [email, setEmail] = useState("");
     const [phone, setPhone] = useState("");
     const [subject, setSubject] = useState("");
     const [message, setMessage] = useState("");

     const restetFields = () => {
          setFullName("");
          setEmail("");
          setPhone("");
          setSubject("");
          setMessage("");
     };

     const sendMessageHandler = () => {
          if (fullName && email && subject) {
               sendMessage({fullName, email, phone, subject, message})
                    .badRequest(() => toast("Niepoprawne dane", { type: "error" }))
                    .res(
                         () => toast("Dziękujemy za wysłanie wiadomości", { type: "success" })
                    )
          restetFields();
          }
          else {
               toast("Wpisz dane", { type: "info" });
          }
     }

    

     return (
          <div className="w-[690px] ml-[162px]" >
               <h2 className="text-xl font-bold mb-[33px] mt-[42px]">NAPISZ WIADOMOŚĆ</h2>
               <div className="flex flex-col">
                    <h3>Imię i nazwisko*</h3>
                    <TextField
                         inputProps={{ value: fullName, onChange: (e) => setFullName(e.target.value) }}
                         className="rounded h-[42px] mb-[34px]"
                    />
                    <div className="flex flex-row   mb-[34px]">
                         <div>
                              <h3>Email*</h3>
                              <TextField
                                   inputProps={{ value: email, onChange: (e) => setEmail(e.target.value) }}
                                   className="rounded w-[337px] h-[42px] mr-4"
                              />
                         </div>
                         <div>
                              <h3>Telefon</h3>
                              <TextField
                                   inputProps={{ value: phone, onChange: (e) => setPhone(e.target.value) }}
                                   className="rounded w-[337px] h-[42px] "
                              />
                         </div>

                    </div>
                    <h3>Temat*</h3>
                    <TextField
                         inputProps={{ value: subject, onChange: (e) => setSubject(e.target.value) }}
                         className="rounded w-[690px] h-[42px] mb-[34px]"
                    />
                    <h3>Wiadomość</h3>
                    <TextField
                         inputProps={{ value: message, onChange: (e) => setMessage(e.target.value) }}
                         className="rounded w-[690px] h-[42px] mb-[34px]"
                    />
               </div>
               <div className="flex fles-col justify-end pb-[113px]">
                    <Button onClick={restetFields} className="text-sm font-bold w-[99px] h-[42px] rounded bottom-0 right-0 bg-grey-white text-black mr-4">
                         Reset</Button>
                    <Button onClick={sendMessageHandler} className="text-sm font-bold w-[99px] h-[42px] rounded bottom-0 right-0 bg-oregano-green text-white">
                         Dodaj</Button>
               </div>
          </div>
     )
};