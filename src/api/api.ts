import wretch from "wretch";
import { CreateUserProfile } from "./types";

export interface SendMessageCommand {
     fullName: string, email: string, phone:string, subject: string, message: string
}

export const subscribe = (email: string) => {
     return wretch("https://api-eko-bazarek.azurewebsites.net/api/subscribe").post({ email });
}
export const sendMessage = (command: SendMessageCommand) => {
     return wretch("https://api-eko-bazarek.azurewebsites.net/api/contact").post({ fullName: command.fullName, email: command.email, phone: command.phone, subject: command.subject, message: command.message });
}

export const getProductsTop = () => {
     return fetch('https://api-eko-bazarek.azurewebsites.net/api/products/categories/top')
     .then(response => {
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         return response.json();
     });
}

export const loginUser = (email: string, password: string) => {
     return wretch("https://api-eko-bazarek.azurewebsites.net/api/users/login")
         .headers({ "Content-Type": "application/json" }) // upewnij się, że ustawiasz odpowiedni nagłówek Content-Type
         .post({ email, password });
 }

 export const createUser = (newUser: CreateUserProfile) =>
  wretch("https://api-eko-bazarek.azurewebsites.net/api/users").headers({ "Content-Type": "application/json" }).post({ ...newUser });
 