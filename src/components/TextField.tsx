import clsx from "clsx";
import { HtmlHTMLAttributes, InputHTMLAttributes, RefObject, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface TextFieldProps extends Omit<HtmlHTMLAttributes<HTMLInputElement>, "children"> {
     inputProps?: InputProps;
     classNameLabel?: string;
     classNameHelperText?: string;
     label?: string;
     helperText?: string;
     required?: boolean;
     error?: boolean;
     inputRef?: RefObject<HTMLInputElement>;
}

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => {
     const { className,
          classNameLabel,
          classNameHelperText,
          inputProps = {},
          label,
          helperText,
          inputRef,
          required = false,
          error = false,
          ...other } = props; 
     const { className: classNameInput, ...otherInput } = inputProps;

     return (
          <div 
               ref={ref}
               className={clsx(className, "flex flex-col text-black",
               error ? "text-red-500" : "text-black")}
               {...other}>
               {label && (
                    <label className={clsx("block text-xs font-semibold mb-1", classNameLabel)}>
                         {label}
                         {required && "*"}
                    </label>
               )}
               <input
                    ref={inputRef} 
                    className={clsx(classNameInput, "block w-full min-h-[42px] px-2 focus:outline-none font-normal text-black",
                    error ? "bg-red-200 border-2 border-red-300" : "bg-white")}
                    required={required}
                    {...otherInput}
               />
               {helperText && (
                    <span className={clsx("block text-xs font-normal mt-1", classNameHelperText)}>
                         {helperText}
                    </span>
               )}
          </div>
     );
}
);

