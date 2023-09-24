import { Product } from "../../components/Products";
import { Categories } from "../../components/Products/Categories";

export const YourProducts = () => {
     return (
          <div className="flex columns-2">
               <Categories />
               <Product />
          </div>
     )
};