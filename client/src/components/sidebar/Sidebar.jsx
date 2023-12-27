import { useSelector } from 'react-redux';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import { AiOutlineDashboard  } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

// Functional component for the Sidebar
const Sidebar = () => {
  // Selecting authentication state from the Redux store
    const {auth} = useSelector((state) => ({...state}));
    // Extracting current user information from the authentication state
    const {currentUser} = auth;

  // JSX for the Sidebar component
  return (
    <div>
      <ul className="sidebar">
        <li className="list-item">
        {/* <Avatar name="Foo Bar" /> */}
        <h5>Hello, {currentUser.firstName} </h5> 
        </li>
        <li className='list-item'>
        <AiOutlineDashboard size={30}/>
					<Link to='/dashboard'>Dashboard</Link>
				</li>
				<li className='list-item'>
        <BsListTask size={30}/>
					<Link to='/taskmanager'>Task Manager</Link>
				</li>
        <li className='list-item'>
        <RxAvatar size={30}/>
					<Link to='/dashboard'>Profile</Link>
				</li>
				<li className='list-item'>
        <IoSettingsOutline size={30}/>
					<Link to='/taskmanager'>Settings</Link>
				</li>
      </ul>
    </div>
  )
}

export default Sidebar
