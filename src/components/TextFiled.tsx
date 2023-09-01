import clsx from "clsx";
import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface TextFieldProps extends Omit<HtmlHTMLAttributes<HTMLInputElement>, "children"> {
     inputProps?: InputProps;
}

export const TextField = (props: TextFieldProps) => {
     const { className, inputProps = {}, ...other } = props;
     return (
          <div className="flex flex-col text-black" {...other}>
               <input className={clsx("text-black", className )}{...inputProps} />
          </div>
     )
};