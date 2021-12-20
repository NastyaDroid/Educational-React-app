import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
    let location = useLocation();
    return (
        <div style={{marginLeft: '20px'}}>
            <h1>Страница {location.pathname} в разработке</h1>
        </div>
    )
}

export default NotFound;