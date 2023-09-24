import { useContext } from "react";
import { Button } from "../../components/Button";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { EditFormData } from './EditFormData';
import { Content } from "../../components";
import ChangePassword from "./ChangePassword";
import { YourProducts } from "./YourProducts";

function classNames(...classes: string[]): string {
     return classes.filter(Boolean).join(' ')
}

export const EditProfilePage = () => {
     const [categories] = useState({
          "DANE GOSPODARSTWA": 'FarmData',
          "ZMIANA HASŁA": 'ChangePassword',
          "TWOJE PRODUKTY": 'YourProducts'
     })

     const { logout } = useContext(UserContext);
     const navigate = useNavigate();
     const handleLogout = () => {
          logout();
          navigate("/profile");
     }
     return (
          <Content title="Edit Profile Page">
               <div className="ml-40 mt-[72px]">
                    <h1 className="uppercase text-5xl font-bold mb-12">profil</h1>
                    <Tab.Group>
                         <Tab.List className="flex space-x-1 rounded-xl  p-1 ">
                              {Object.keys(categories).map((category) => (
                                   <Tab
                                        key={category}
                                        className={({ selected }) =>
                                             classNames(
                                                  'pb-4 px-4 text-xs font-medium bg-grey-white',
                                                  selected
                                                       ? 'border-b-2 border-oregano-green text-oregano-green'
                                                       : 'border-b-2 border-gray-200 hover:text-gray-700 hover:border-gray-300'
                                             )
                                        }
                                   >
                                        {category}
                                   </Tab>
                              ))}
                         </Tab.List>
                         <Tab.Panels className="mt-2">
                              {Object.values(categories).map((component, index) => (
                                   <Tab.Panel
                                        key={index}
                                   >
                                        {component === 'FarmData' && <EditFormData />}
                                        {component === 'ChangePassword' && <ChangePassword />}
                                        {component === 'YourProducts' && <YourProducts />}
                                   </Tab.Panel>
                              ))}
                         </Tab.Panels>
                    </Tab.Group>
               </div>
               <Button onClick={handleLogout} className="mt-24 mb-4 w-20 right-1">
                    Wyloguj się
               </Button>
          </Content>
     )
}