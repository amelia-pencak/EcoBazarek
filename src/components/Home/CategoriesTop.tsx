import { useState, useEffect } from 'react';
import { getProductsTop } from '../../api';
import { ImageSquare } from './ImageSquare';

interface Category {
     name: string;
     iconUrl: string;
 }

export const CategoriesTop = () => {
     
    const [topCategories, setTopCategories] = useState<Category[]>([]);

    useEffect(() => {
     getProductsTop()
            .then(data => setTopCategories(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
     <div className="flex justify-center items-center">
        <div className=" grid grid-cols-5 gap-x-[17px] gap-y-[18px] place-content-center">
            {topCategories.map((item, index) => (
                <ImageSquare key={index} name={item.name} iconUrl={item.iconUrl} />
            ))}
        </div>
     </div>
    );
}

