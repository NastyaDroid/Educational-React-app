import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
    let location = useLocation();
    return (
        <div>
            <h1>Страница не найдена(404){location.pathname}</h1>
        </div>
    )
}

export default NotFound;