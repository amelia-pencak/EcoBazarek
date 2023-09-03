import wretch from "wretch";

export const subscribe = (email: string) => {
     return wretch("https://api-eko-bazarek.azurewebsites.net/api/subscribe").post({ email });
}
export const sendMessage = (fullName: string, email: string, phone:string, subject: string, message: string) => {
     return wretch("https://api-eko-bazarek.azurewebsites.net/api/contact").post({ fullName, email, phone, subject, message });
}