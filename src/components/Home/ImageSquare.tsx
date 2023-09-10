interface ImageSquareProps {
     name: string;
     iconUrl: string;
 }
 
export const ImageSquare: React.FC<ImageSquareProps> = ({ name, iconUrl }) => {
    return (
        <div className="w-40 h-40 bg-white relative flex flex-col items-center justify-center rounded-3xl">
            <img src={iconUrl} alt={name} className=" w-16 h-16 object-cover" />
                <span className="text-black mt-[17px]">{name}</span>
        </div>
    );
}
