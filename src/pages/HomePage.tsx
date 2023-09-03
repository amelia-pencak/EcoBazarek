import { toast } from "react-toastify";
import { Content } from "../components";
import 'react-toastify/dist/ReactToastify.css'

export const HomePage = () => {
     const notify = () => toast("Wow so easy!");

    
  
     return <Content title="Home page" loading={false}>
          <button onClick={notify}>Notify!</button>
          Home page
          <p>Home Page</p>
          <p>Home Page</p>
          <p>Home Page</p>
          <p>Home Page</p>
          <p>Home Page</p>
          <p>Home Page</p>
          <p>Home Page</p>
          <p>Home Page</p>
          <p>Home Page</p>
          <p>Home Page</p>
          <p>Home Page</p>
          
     </Content>
};