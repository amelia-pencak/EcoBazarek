import { useState } from "react";
import { sendMessage } from "../../api";
import { toast } from "react-toastify";
import { TextField, InputProps } from "../TextField";
import './ContactStyle.css'
import { Button } from "../Button";
import { MessageForm } from "../../api/types";

const getDefaultMessageForm = (): MessageForm => ({
     fullName: "",
     email: "",
     phone: "",
     subject: "",
     message: "",
});

export const WriteMessageContact = () => {
     const [formData, setFormData] = useState<MessageForm>(
          getDefaultMessageForm
     );


     const getFieldProps = (key: keyof MessageForm): InputProps => ({
          name: key,
          value: formData[key],
          onChange: (e) => {
               setErrors((prev) => {
                    const next = structuredClone(prev);
                    delete next[key];
                    return next;
               });
               setFormData((prev) => ({
                    ...prev,
                    [key]: e.target.value}))}
     })

     const [errors, setErrors] = useState<{ [key: string]: string }>({});
     const sendMessageHandler = () => {

          console.log(formData)
          sendMessage(formData)
               .badRequest((err) => {
                    const response = err.text
                         ? (JSON.parse(err.text) as {
                              inner: { path: string; message: string }[];
                         })
                         : null;
                    if (response) {
                         setErrors(
                              response.inner.reduce<{ [key: string]: string }>((prev, curr) => {
                                   prev[curr.path] = curr.message;
                                   return prev;
                              }, {})
                         );
                    }
               })
               .res(
                    () => {
                         toast("Dziękujemy za wysłanie wiadomości", { type: "success" })
                         setFormData(getDefaultMessageForm())
                    }
               )

     }
     const getError = (key: keyof MessageForm) => errors[key];


     const getTextFieldProps = (key: keyof MessageForm) => {
          const error = getError(key);
          return {
               helperText: error,
               error: Boolean(error),
          };
     };
     return (
          <div className="w-[690px] ml-[162px]" >
               <h2 className="text-xl font-bold mb-[33px] mt-[42px]">NAPISZ WIADOMOŚĆ</h2>
               <div className="flex flex-col">
                    <h3>Imię i nazwisko*</h3>
                    <TextField
                         required
                         {...getTextFieldProps("fullName")}
                         inputProps={getFieldProps("fullName")}
                         className="rounded h-[42px] mb-[34px]"
                    />
                    <div className="flex flex-row   mb-[34px]">
                         <div>
                              <h3>Email*</h3>
                              <TextField
                                   required
                                   {...getTextFieldProps("email")}
                                   inputProps={getFieldProps("email")}
                                   className="rounded w-[337px] h-[42px] mr-4"
                              />
                         </div>
                         <div>
                              <h3>Telefon</h3>
                              <TextField
                                   {...getTextFieldProps("phone")}
                                   inputProps={getFieldProps("phone")}
                                   className="rounded w-[337px] h-[42px] "
                              />
                         </div>

                    </div>
                    <h3>Temat*</h3>
                    <TextField
                         required
                         {...getTextFieldProps("subject")}
                         inputProps={getFieldProps("subject")}
                         className="rounded w-[690px] h-[42px] mb-[34px]"
                    />
                    <h3>Wiadomość</h3>
                    <TextField
                         {...getTextFieldProps("message")}
                         inputProps={getFieldProps("message")}
                         className="rounded w-[690px] h-[42px] mb-[34px]"
                    />
               </div>
               <div className="flex fles-col justify-end pb-[113px]">
                    <Button variant="text" onClick={() => setFormData(getDefaultMessageForm())} className="text-sm font-semibold w-[99px] h-[42px] rounded bottom-0 right-0 bg-grey-white text-black mr-4">
                         Reset</Button>
                    <Button onClick={sendMessageHandler} className="text-sm font-semibold w-[99px] h-[42px] rounded bottom-0 right-0 bg-oregano-green text-white">
                         Dodaj</Button>
               </div>
          </div>
     )
};