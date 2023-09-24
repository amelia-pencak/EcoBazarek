import { FormEvent, useContext, useEffect, useState } from "react";
import { getDefaultCreateUserProfile } from "./utils";
import { CreateUserProfile } from "../../api/types";
import { InputProps } from "../../components/TextField";
import { TextAreaProps } from "../../components/TextAreaField";
import { createUser } from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const useRegistrationForm = () => {
     const [formData, setFormData] = useState<CreateUserProfile>(
          getDefaultCreateUserProfile
     );

     const [errors, setErrors] = useState<{ [key: string]: string }>({});
     const navigate = useNavigate();

     const { login, isLogin } = useContext(UserContext);

     useEffect(() => {
          if (isLogin) {
               navigate("/edit-profile");
          }
     }, [isLogin, navigate]);

     const submit = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if(Object.keys(errors).length > 0) {
               toast("Wypełnij wszystkie pola poprawnie", { type: "error" });
          }
          createUser(formData)
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
               .forbidden(() => {
                    toast("Mail istnieje już w bazie", { type: "error" });
                })
               .res(response => {
                    if (response.status == 200) {
                         login(formData.email, formData.password);
                    }
               });
     }

     const getFieldProps = (key: keyof CreateUserProfile): InputProps & TextAreaProps => ({
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
                    [key]: e.target.value,
               }))
          },
          onBlur: (e) => {
               if (key === "repeatPassword") {
                    const value = e.target.value;
                    if (value !== formData.password)
                         setErrors((prev) => {
                              prev[key] = "Hasła muszą być takie same";
                              return { ...prev };
                         });
               }
          },
     });

     const reset = () => {
          setFormData(getDefaultCreateUserProfile)
     };

     const getError = (key: keyof CreateUserProfile) => errors[key];

     const getTextFieldProps = (key: keyof CreateUserProfile) => {
          const error = getError(key);
          return {
               helperText: error,
               error: Boolean(error),
          };
     };

     const isValid = Object.keys(errors).length === 0;
     return { isValid, errors, formData, getFieldProps, getError, submit, reset, getTextFieldProps }
}
