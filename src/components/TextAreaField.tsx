import clsx from "clsx";
import { HtmlHTMLAttributes, RefObject, TextareaHTMLAttributes, forwardRef } from "react";
import { FormLabel } from "./FormLabel";
import { HelperText } from "./FormHelperText";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

export interface TextAreaFieldProps extends Omit<HtmlHTMLAttributes<HTMLInputElement>, "children"> {
     textAreaProps?: TextAreaProps;
     classNameLabel?: string;
     classNameHelperText?: string;
     label?: string;
     helperText?: string;
     required?: boolean;
     error?: boolean;
     textAreaRef?: RefObject<HTMLTextAreaElement>;
}

export const TextAreaField = forwardRef<HTMLDivElement, TextAreaFieldProps>((props, ref) => {
     const { className,
          classNameLabel,
          classNameHelperText,
          textAreaProps: inputProps = {},
          label,
          helperText,
          textAreaRef: inputRef,
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
               {label && 
                    <FormLabel className={classNameLabel} label={label} required={required}/>
               }
               <textarea
                    ref={inputRef} 
                    className={clsx(classNameInput, "block w-full min-h-[42px] px-2 py-2 focus:outline-none font-normal text-black",
                    error ? "bg-red-200 border-2 border-red-300" : "bg-white")}
                    required={required}
                    {...otherInput}
               />
              {helperText && 
                    <HelperText className={classNameHelperText} text={helperText}/>
               }
          </div>
     );
}
);

