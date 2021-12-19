import React from "react";
import { Link } from 'react-router-dom';
import Cart from "./Cart";


const Profile = (props) => {
    return (
        <ul className='header__profile profile'>
               {props.list.map((item) => (
                   <li className="profile__item" key={item.objectID}>
                   <Link to={item.url} className="header__link link">{item.title} </Link>
                   </li>
               ))}
               <li className="profile__item"><Cart /></li>
            </ul> 
    )
}

export default Profile;