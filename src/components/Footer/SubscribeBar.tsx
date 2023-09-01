import MyEnvelopeOpenIcon from "./EnvelopOpenIcon";
import SocialMediaIcon from "./SocialMediaIcon";
import { Subscribe } from "./Subscribe";
import { SubscribeText } from "./SubscribeText";

export const SubscribeBar = () => {
     return (
          <div className="flex flex-col items-center">
               <MyEnvelopeOpenIcon />
               <SubscribeText />
               <Subscribe />
               <SocialMediaIcon />
          </div>
     )
};