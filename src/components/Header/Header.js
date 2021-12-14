import React from 'react';
import iconLinks from '../../database/iconLinks.json';
import links from '../../database/links.json';
import Logo from './Logo';
import InputSearch from './InputSearch';
import Profile from './Profile';
import NavigationMenu from './NavigationMenu';
import './Header.css';

const Header = () => {
    return (
            <header className='main__header header'>
                <div className='header__container'>
                    <Logo />
                    <InputSearch /> 
                    <Profile list={iconLinks} />
                    <NavigationMenu list={links} />
                </div>
            </header>
    );
} 

export default Header;