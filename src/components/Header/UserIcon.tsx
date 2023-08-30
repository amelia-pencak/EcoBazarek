import { UserIcon } from '@heroicons/react/24/solid'

const UserIconClick = () => {
  alert('UserIcon Clicked!');
}

function MyUserIcon() {
  return (
    <div onClick={UserIconClick}>
      <UserIcon className="h-12 w-12 p-3 text-white" />
    </div>
  )
}

export default MyUserIcon;