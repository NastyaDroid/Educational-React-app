import React from "react";
import { Link } from 'react-router-dom';


const NavigationMenu = ({ list }) => {
    return (
        <nav className='header__nav nav'>
            {list.map((item) => (
                <Link to={item.url} key={item.objectID} className="header__link nav__link link">{item.title}</Link>
            ))}
        </nav>
    )
}
export default NavigationMenu;