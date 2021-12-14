import React from "react";
import CoffeeMachines from "../components/Catalogue/CoffeeMachines";
import coffeeMachines from '../database/coffeeMachines.json';
import '../App.css';

const CoffeeMachinesPage = () => {
    return (
        <div className="main">
            <CoffeeMachines list={coffeeMachines} />
        </div>
    )
}


export default CoffeeMachinesPage;