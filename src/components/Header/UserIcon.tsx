import { UserIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';


export const MyUserIcon = () => {
  const navigate = useNavigate();
  const UserIconClick = () => {
    navigate("/profile");
  }
  return (
    <div onClick={UserIconClick}>
      <UserIcon className="h-12 w-12 p-3 text-white" />
    </div>
  )
}

// const UserIconClick = () => {
//   alert('UserIcon Clicked!');
// }

// function MyUserIcon() {
//   return (
//     <div onClick={UserIconClick}>
//       <UserIcon className="h-12 w-12 p-3 text-white" />
//     </div>
//   )
// }

// export default MyUserIcon;

