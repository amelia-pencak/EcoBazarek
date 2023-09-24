import { NavItem } from "../NavItem";
import MySparklesIcon from "./SparklesIcon";
import {MyUserIcon} from "./UserIcon";
import MyMagnifyingGlassIcon from "./MagnifyingGlassIcon";
import logo from '../../images/logo-main.png';

export const Header = () => {
     return <header className="flex flex-row justify-between h-[64px] bg-oregano-green text-white items-center
                              text-sm fixed inset-x-0 inset-y-0 z-[1] shadow-md">
          <div className="flex flex-row text-xl font-bold ml-4 items-center">
               <img src={logo} alt="logo" className="h-[42px] w-[42px] "/>
               <div className="ml-2">EkoBazarek</div>
          </div>
          <ul className="flex flex-row p-6 items-center" >
               <NavItem to="/"> Home </NavItem>
               <NavItem to="/about-us"> O nas </NavItem>
               <NavItem to="/products"> Produkty </NavItem>
               <NavItem to="/contact"> Kontakt </NavItem>
          </ul>
          <ul className="flex flex-row mr-4">
              <MyMagnifyingGlassIcon />
               <MySparklesIcon />
               <MyUserIcon />
          </ul>
     </header>;
};