import wretch from "wretch";

export interface SendMessageCommand {
     fullName: string, email: string, phone:string, subject: string, message: string
}

export const subscribe = (email: string) => {
     return wretch("https://api-eko-bazarek.azurewebsites.net/api/subscribe").post({ email });
}
export const sendMessage = (command: SendMessageCommand) => {
          
     return wretch("https://api-eko-bazarek.azurewebsites.net/api/contact").post({ command });
}