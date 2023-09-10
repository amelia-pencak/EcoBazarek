import { Content } from "../components";
import 'react-toastify/dist/ReactToastify.css'
import "../components/Home/mainPhotoHome.css"
import { ImageHome } from "../components/Home/ImageHome";
import { CategoriesTop } from "../components/Home/CategoriesTop";

export const HomePage = () => {
     return <Content title="Home page" loading={false}>
          <ImageHome />
          <div className="flex flex-col items-center justify-center text-[38px] font-medium mt-[52px] mb-[37px]">POPULARNE KATEGORIE</div>
          <CategoriesTop />
          <div className="flex flex-col items-center justify-center text-[38px] font-medium mt-[66px]">PRODUKTY</div>
     </Content>
};