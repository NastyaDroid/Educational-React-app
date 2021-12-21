import React from "react";
import { Link } from 'react-router-dom';
import CartIcon from "./CartIcon";
import FaceIcon from "./FaceIcon";

const data = [
    { title: "Профиль", url: "/profile", objectID: 0, comp: <FaceIcon /> },
    { title: "Корзина", url: "/cart", objectID: 1, comp: <CartIcon /> }
]
const Profile = () => {
    return (
        <nav className='header__profile profile'>
            {data.map((item) => {
                return <Link key={item.objectID} to={item.url} className='header__link link'>
                    <span className='header__profile-icon'>{item.comp}</span>
                    <span className='header__profile-title'>{item.title}</span>
                </Link>
            })}
        </nav>
    )
}

export default Profile;