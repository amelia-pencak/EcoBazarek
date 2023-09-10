// import { useState } from "react";
import { NavLink } from "react-router-dom"
import "./mainPhotoHome.css"
// import image from "../../images/freshFruitsHome.png"

export const ImageHome = () => {
     //      const [currentImageIndex, setCurrentImageIndex] = useState(0);

     //   const images = [
     //     image,
     //     "url_obrazka2.jpg",
     //     "url_obrazka3.jpg"
     //   ];
     return <div className="flex flex-col items-center justify-center hero-image-home ml-[-16px] mr-[-16px]">
          <div className="text-shadow text-[52.5px] text-white font-extrabold w-[752px] h-[68px] mb-[31px]">
               ŚWIEŻE OWOCE I WARZYWA
          </div>
          <div
               className="flex flex-col items-center justify-center bg-white rounded-sm w-32 h-10
                text-oregano-green text-xs font-medium cursor-pointer transition duration-300 ease-in-out">
               <NavLink to="/products" >PRODUKTY</NavLink>
          </div>
     </div>
}