import wretch from "wretch";

export const subscribe = (email: string) => {
     return wretch("https://api-eko-bazarek.azurewebsites.net/api/subscribe").post({ email });
}