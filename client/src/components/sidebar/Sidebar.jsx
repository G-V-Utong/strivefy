import React from 'react';
import { useSelector } from 'react-redux';
import './sidebar.scss'

const Sidebar = () => {
    const {auth} = useSelector((state) => ({...state}));
    const {currentUser} = auth;
  return (
    <div>
      <ul className="sidebar">
        <li className="list-item">
         <h5>Hello, {currentUser.username} </h5> 
        </li>

      </ul>
    </div>
  )
}

export default Sidebar
