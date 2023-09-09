import { Content } from "../components";
import { FilmAboutUs } from "../components/AboutUs";
import "../components/AboutUs/aboutUsHero.css"
import { TextAboutUs } from "../components/AboutUs/TextAboutUs";

export const AboutUsPage = () => {
     return <Content title="AboutUs page" className="flex flex-col items-center bg-grey-white">
          <div className="hero-image-about-us w-full max-w-[1044px]"></div>
          <TextAboutUs />
          <FilmAboutUs />
     </Content>
};