import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const MagnifyingGlassIconClick = () => {
     alert('MagnifyingGlassIcon Clicked!');
     }

function MyMagnifyingGlassIcon() {
  return (
    <div onClick={MagnifyingGlassIconClick}>
      <MagnifyingGlassIcon className="h-12 w-12 p-3 text-white" />
    </div>
  )
}

export default MyMagnifyingGlassIcon;