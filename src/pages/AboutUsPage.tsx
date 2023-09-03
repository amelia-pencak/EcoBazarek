import { Content } from "../components";
import { FilmAboutUs } from "../components/AboutUs";
import "../components/AboutUs/aboutUsHero.css"
import { TextAboutUs } from "../components/AboutUs/textAboutUS";

export const AboutUsPage = () => {
     return <Content title="AboutUs page" className="flex flex-col items-center">
          <div className="hero-image w-full max-w-[1044px]"></div>
          <TextAboutUs />
          <FilmAboutUs />
     </Content>
};