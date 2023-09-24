import { useEffect, useState } from "react";
import { getProducts } from "../../api";
import { ChevronRightIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import { Loader } from "..";
import "./Product.css"
import { PhoneIcon } from "@heroicons/react/24/solid";


interface Product {
     name: string;
     desc: string;
     type: string;
     category: string;
     price: number;
     unit: string;
}

export const Product = () => {
     const [loading, setLoading] = useState(true);
     const [products, setProducts] = useState<Product[]>([]);

     useEffect(() => {
          getProducts()
               .then(data => {
                    setProducts(data);
                    setLoading(false);
               })
               .catch(error => {
                    console.error('Error fetching data:', error);
                    setLoading(false);
               });
     }, []);

     return (
          <div>
               {loading ? (
                    <div className="flex justify-center items-center  ">
                         <Loader className="loader" />
                    </div>
               ) : (
                    <div className="product-list">
                         {products.map(product => (
                              <div className="card" key={product.name}>
                                   <img className="imgProducts" src="" alt="" />
                                   <h2 className="name">{product.name}</h2>
                                   <p className="desc">{product.desc}</p>
                                   <p className="price" >{product.price} zł</p>
                                   <div className="info">
                                        <div className="more-info-icon">
                                             <a href="link-do-innej-strony" className="more-info">Dowiedz się więcej</a>
                                             <ChevronRightIcon className="chevronIcon" />
                                        </div>
                                        <div className="icons">
                                             <EnvelopeOpenIcon className="iconProducts" />
                                             <PhoneIcon className="iconProducts " />
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               )}
          </div>
     );
}