import { FormEvent, useContext, useEffect, useState } from "react";
import { UserProfile } from "../../api/types";
import { InputProps } from "../../components/TextField";
import { TextAreaProps } from "../../components/TextAreaField";
import { getUserByToken, updateUser } from "../../api";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/UserContext";

export const useEditFormData = () => {


     const [formData, setFormData] = useState<UserProfile | null>(null);
     const [loading, setLoading] = useState(false);
     const [initialFormData, setInitialFormData] = useState<UserProfile | null>(null);
     const [errors, setErrors] = useState<{ [key: string]: string }>({});

     const { isLogin, token } = useContext(UserContext);

     useEffect(() => {
          if (isLogin) {
               setLoading(true);
               getUserByToken(token)
                    .then(data => {
                         setFormData(data);
                         setInitialFormData(data);
                         setLoading(false);
                    })
                    .catch(error => {
                         console.error("Failed to fetch user data:", error),
                              setLoading(false);
                    });
          }
     }, [isLogin, token]);

     console.log(formData);
     const submit = async (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setLoading(true);
          if (!isLogin) return;
          if (!formData) {
               console.error("Form data is null");
               return;
          }
          try {
               const response = await updateUser(formData, token);
               toast("Profile updated successfully", { type: "success" });
               console.log(response.data);
               setLoading(false);
          } catch (error) {
               console.error(error);
               toast("Failed to update profile", { type: "error" });
               setLoading(false);
          }
          //  console.log(formData);
     }

     const getFieldProps = (key: keyof UserProfile): InputProps & TextAreaProps => ({
          name: key,
          value: formData ? formData[key] : '',
          onChange: (e) => {
               setErrors((prev) => {
                    const next = structuredClone(prev);
                    delete next[key];
                    return next;
               });
               setFormData((prev) => {
                    if (!prev) return null;
                    return {
                         ...prev,
                         [key]: e.target.value,
                    }
               })
          }
     });

     const reset = () => {
          setFormData(initialFormData);
     };

     const getError = (key: keyof UserProfile) => errors[key];

     const getTextFieldProps = (key: keyof UserProfile) => {
          const error = getError(key);
          return {
               helperText: error,
               error: Boolean(error),
          };
     };

     const isValid = Object.keys(errors).length === 0;
     return { isValid, errors, formData, getFieldProps, getError, submit, reset, getTextFieldProps, loading }
}
