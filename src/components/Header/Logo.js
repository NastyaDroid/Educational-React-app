import React from 'react';
import LogoImage from '../../logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='header__logo logo'>
        <Link to="/">
            <img src={LogoImage} alt="Логотип компании Джаст Кофе"/>
        </Link>
        </div>
    );
};

export default Logo;