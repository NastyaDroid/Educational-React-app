import React from 'react';
import links from '../../localJSON/links.json';
import Logo from './Logo';
import InputSearch from './InputSearch';
import Profile from './Profile';
import NavigationMenu from './NavigationMenu';
import './Header.css';

const Header = () => {
    return (
        <header className='header__container header'>
            <div className='header__main'>
                <div className='header__top'>
                    <Logo />
                    <InputSearch />
                    <Profile />
                </div>
            </div>
            <NavigationMenu list={links} />
        </header>

    );
}

export default Header;