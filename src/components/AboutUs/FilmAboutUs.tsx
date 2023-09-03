import landscape from './landscape.mp4'

export const FilmAboutUs = () => {
     return (
          <div className="w-full max-w-[1044px] mb-[492px]" >
               <h2 className="text-5xl font-bold text-bistre-brown mt-10 mb-[35px]">NASZE UPRAWY Z LOTU PTAKA</h2>
               <video controls className='h-[587px]'>
                    <source src={landscape} type="video/mp4" />
               </video>
          </div>
     )
};