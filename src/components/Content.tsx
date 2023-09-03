import { HTMLAttributes } from "react";
import { Helmet } from "react-helmet-async";
import { Loader } from "./Loader";
import "./Loader.css";
import { FloatingActionButton } from "./FloatingActionButton";

export interface ContentProps extends HTMLAttributes<HTMLElement> {
     title: string;
     loading?: boolean;
}


export const Content = (props: ContentProps) => {
     const { children, title, loading = false, ...other } = props;
     return <main className="p-16 bg-grey-white" {...other}>
          <Helmet>
               <title>{title}</title>
          </Helmet>
          <FloatingActionButton />
          
          {
               loading && (
                    <div className="fixed top-0 left-0 w-full h-full z-50 backdrop-opacity-40 bg-[#f6f5f1]/75 flex items-center justify-center">
                         <Loader className="loader" />
                    </div>

               )
          }

          {children}
     </main>
};