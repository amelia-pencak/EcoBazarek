import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { Button } from './Button';


export const FloatingActionButton = () => {
     const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        };
        return (
          <Button 
            onClick={scrollToTop} 
            className="fixed w-[42px] h-[42px] bg-oregano-green text-black rounded-full focus:outline-none right-[27px] top-[624px]"
            
          >
            <ChevronUpIcon className="w-5 h-5 mx-auto my-2" />
          </Button>
        );
      }
      