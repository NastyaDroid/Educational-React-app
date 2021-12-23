import React from "react";
import Catalog from "../components/Catalog/Catalog";
import coffeeMachines from '../localJSON/coffeeMachines.json'

const CoffeeMachines = () => {
    return (
            <Catalog list={coffeeMachines}/>
    )
    
}


export default CoffeeMachines;