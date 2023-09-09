import { Content } from "../components";
import { Map } from "../components/Contact/Map";
import { WriteMessageContact } from "../components/Contact/WriteMessageContact";

export const ContactPage = () => {
     return <Content title="Contact Page" className="w-[100%] bg-grey-white">
          <h1 className="mt-[64px] pt-[72px] pb-[34px] ml-[162px] text-5xl font-bold">KONTAKT</h1>
          <Map />
          <WriteMessageContact />
     </Content>
};