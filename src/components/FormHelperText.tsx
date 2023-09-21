import { HtmlHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface HelperTextProps extends Omit<HtmlHTMLAttributes<HTMLSpanElement>, "children">{
     text: string;
}

export const HelperText = forwardRef<HTMLSpanElement, HelperTextProps>((props, ref) => {
     const { className, text, ...other } = props;
     return (
          <span ref={ref} className={clsx("block text-xs font-normal mt-1", className)} {...other}>
               {text}
          </span>
     )
});