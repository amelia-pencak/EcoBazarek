import { NavItem } from "./NavItem";
import MySparklesIcon from "./SparklesIcon";
import MyUserIcon from "./UserIcon";
import MyMagnifyingGlassIcon from "./MagnifyingGlassIcon";

export const Header = () => {
     return <header className="flex flex-row justify-between h-[64px] bg-oregano-green text-white items-center
                              text-sm">
          <div className="text-xl font-bold pl-4">
               EkoBazarek
          </div>
          <ul className="flex flex-row p-6">
               <NavItem to="/"> Home </NavItem>
               <NavItem to="/about-us"> O nas </NavItem>
               <NavItem to="/products"> Produkty </NavItem>
               <NavItem to="/contact"> Kontakt </NavItem>
          </ul>
          <ul className="flex flex-row pr-4">
              <MyMagnifyingGlassIcon />
               <MySparklesIcon />
               <MyUserIcon />
          </ul>
     </header>;
};