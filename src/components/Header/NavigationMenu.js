import React from "react";
import { Outlet, Link } from 'react-router-dom';


const NavigationMenu = ( { list } ) => {
    return (
        <nav className='header__nav nav'>
            {list.map((item) => (
                   <Link to={item.url} key={item.objectID} className="header__link">{item.title}</Link> 
               ))}
               <Outlet />
        </nav>
    )
  }
export default NavigationMenu;