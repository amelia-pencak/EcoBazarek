import fb from '../images/fb.png';
import insta from '../images/instagram.png';
import link from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import yt from '../images/youtube.png';

function SocialMediaIcon() {
  return (
    <div className='flex flex-row mt-[15px] mb-[13px]'>
       <img src={fb} alt="logo" className="h-[36px] w-[36px] ml-[13px] mr-[13px] "/> 
       <img src={insta} alt="logo" className="h-[36px] w-[36px] ml-[13px] mr-[13px] "/> 
       <img src={link} alt="logo" className="h-[36px] w-[36px] ml-[13px] mr-[13px]  "/> 
       <img src={twitter} alt="logo" className="h-[36px] w-[36px] ml-[13px] mr-[13px]  "/> 
       <img src={yt} alt="logo" className="h-[36px] w-[36px] ml-[13px] mr-[13px]  "/> 
    </div>
  )
}

export default SocialMediaIcon;