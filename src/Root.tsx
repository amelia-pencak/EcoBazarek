import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "./contexts";

function Root() {

  return (
    <>
      <UserProvider>
        <HelmetProvider>
          <Header />
          <Outlet />
          <Footer />
        </HelmetProvider>
        <ToastContainer position="bottom-left" />
      </UserProvider>

    </>
  )
}

export default Root;
