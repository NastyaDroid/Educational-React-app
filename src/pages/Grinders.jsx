import React from "react";
import Catalog from "../components/Catalog/Catalog";
import grinders from '../localJSON/grinders.json'

const Grinders = () => {
    return (
            <Catalog list={grinders}/>
    )
    
}


export default Grinders;