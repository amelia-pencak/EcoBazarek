
export interface SubscribeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
     disabled?: boolean;
     variant?: "contained" | "text";
}

export const SubscribeButton = (props: SubscribeButtonProps) => {
     const {className, children, ...other} = props;
     return (
          <button className={className} {...other}>
               {children}
          </button>
     )
};