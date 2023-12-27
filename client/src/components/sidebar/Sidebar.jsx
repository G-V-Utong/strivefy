import { useSelector } from 'react-redux';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import { AiOutlineDashboard  } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
// import Avatar from 'react-avatar';

const Sidebar = () => {
    const {auth} = useSelector((state) => ({...state}));
    const {currentUser} = auth;
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
