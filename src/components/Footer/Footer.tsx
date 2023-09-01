import { SubscribeBar } from "./SubscribeBar";
import { SeperatingLine } from "./SeperatingLine";
import { NavItem } from "../NavItem";
import { SiteCredits } from "./SiteCredits";

export const Footer = () => {
     return <footer className="grid place-items-center h-[500px] bg-bistre-brown
      text-white text-sm ">
          <SubscribeBar />
          <SeperatingLine />
          <ul className="flex flex-row m-3">
               <NavItem to="/about-us"> O nas </NavItem>
               <NavItem to="/products"> Produkty </NavItem>
               <NavItem to="/contact"> Kontakt </NavItem>
               <NavItem to="/terms-of-use"> Warunki użytkowania </NavItem>
               <NavItem to="/privacy-policy"> Polityka prywatności </NavItem>
          </ul>
          <SeperatingLine />
          <SiteCredits />

     </footer>;
};