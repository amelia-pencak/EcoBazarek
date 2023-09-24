import wretch from "wretch";
import { CreateUserProfile, LoginUserResponse, UserProfile } from "./types";
import axios from "axios";
import { AxiosResponse } from "axios";

export interface SendMessageCommand {
     fullName: string, email: string, phone: string, subject: string, message: string
}

export const subscribe = (email: string) => {
     return wretch("https://api-eko-bazarek.azurewebsites.net/api/subscribe").post({ email });
}
export const sendMessage = (command: SendMessageCommand) => {
     return wretch("https://api-eko-bazarek.azurewebsites.net/api/contact").post({ fullName: command.fullName, email: command.email, phone: command.phone, subject: command.subject, message: command.message });
}

export const getProducts = () => {
     return fetch('https://api-eko-bazarek.azurewebsites.net/api/products')
          .then(response => {
               if (!response.ok) {
                    throw new Error('Network response was not ok');
               }
               return response.json();
          });
}

export const getCategoriesTop = () => {
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
          .headers({ "Content-Type": "application/json" })
          .post({ email, password });
}

export const createUser = (newUser: CreateUserProfile) =>
     wretch("https://api-eko-bazarek.azurewebsites.net/api/users").headers({ "Content-Type": "application/json" }).post({ ...newUser });

export const updateUser = (
     user: UserProfile,
     token: string | null
): Promise<AxiosResponse<LoginUserResponse, unknown>> =>
     axios.put("https://api-eko-bazarek.azurewebsites.net/api/users", user, {
          headers: { Authorization: `Bearer ${token}` },
     });

export const getUserByToken = async (token: string | null): Promise<UserProfile> => {
     if (!token) {
          throw new Error('Token is null');
     }
     const response = await fetch("https://api-eko-bazarek.azurewebsites.net/api/users/me", {
          headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${token}`
          },
     });
     if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
     }
     const data: UserProfile = await response.json();
     return data;
};

export const changePassword = (
     token: string,
     oldPassword: string,
     newPassword: string
): Promise<AxiosResponse<unknown, unknown>> =>
     axios.post(
          "https://api-eko-bazarek.azurewebsites.net/api/users/change-password",
          { oldPassword, newPassword },
          {
               headers: { Authorization: `Bearer ${token}` },
          }
     );