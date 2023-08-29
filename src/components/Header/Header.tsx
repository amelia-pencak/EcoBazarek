import { NavItem } from "./NavItem";

export const Header = () => {
     return <header>
          <ul>
               <NavItem to="/"> Home </NavItem>
               <NavItem to="/about-us"> O nas </NavItem>
               <NavItem to="/products"> Produkty </NavItem>
               <NavItem to="/contact"> Kontakt </NavItem>
          </ul>
     </header>;
};