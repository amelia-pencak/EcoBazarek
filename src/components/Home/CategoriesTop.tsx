import { useState, useEffect } from 'react';
import { getCategoriesTop } from '../../api';
import { ImageSquare } from './ImageSquare';
import { Loader } from '../Loader';

interface Category {
    name: string;
    iconUrl: string;
}

export const CategoriesTop = () => {
    const [loading, setLoading] = useState(true);
    const [topCategories, setTopCategories] = useState<Category[]>([]);

    useEffect(() => {
        getCategoriesTop()
            .then(data => {
                setTopCategories(data);
                setLoading(false);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex justify-center items-center">
            {loading ? (
                <Loader className="loader mt-3 mb-[-12px]" />
            ) : (
                <div className=" grid grid-cols-5 gap-x-[17px] gap-y-[18px] place-content-center">
                    {topCategories.map((item, index) => (
                        <ImageSquare key={index} name={item.name} iconUrl={item.iconUrl} />
                    ))}
                </div>
            )}
        </div>
    );
}

