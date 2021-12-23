import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import CartIcon from "./CartIcon";
import FaceIcon from "./FaceIcon";
import ShowAlert from '../ShowAlert/ShowAlert';
import { AuthContext } from '../../App';

const profileData = { 
    title: "Профиль",
    name: 'Анастасия', 
    url: "/profile", 
    id: 0, 
    comp: <FaceIcon /> 
};
    // { title: "Корзина", url: "/cart", objectID: 1, comp: <CartIcon /> }

const Profile = () => {

    const { isAuth } = useContext(AuthContext);

    return (
        <div className='header__profile profile'>
            <Link key={profileData.id} to={profileData.url} className='header__link link'>
                <span className='header__profile-icon'>{profileData.comp}</span>
                <span className='header__profile-title'>{isAuth ? profileData.name : profileData.title}</span>
            </Link>
            <div className="header__cart">
                <Link to='/profileCart' className='header__link link'><CartIcon /></Link>
                <ShowAlert />
            </div>
        </div>
    )
}

export default Profile;