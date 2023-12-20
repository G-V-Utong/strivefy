import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const {auth} = useSelector((state) => ({...state}));
    const {currentUser} = auth;
  return (
    <div>
      <ul className="sidebar">
        <li className="list-item">
            {currentUser.username}
        </li>
        
      </ul>
    </div>
  )
}

export default Sidebar
