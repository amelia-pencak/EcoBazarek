import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";
import "./Loader.css";

export const Loader = ({ className, ...other }: Omit<HtmlHTMLAttributes<HTMLSpanElement>, "children">) => {
     return <span className={clsx(className, "Loader-root")} {...other} />

};