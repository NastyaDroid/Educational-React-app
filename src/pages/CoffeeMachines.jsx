import React from "react";
import CoffeeMachines from "../components/CoffeeMashinesCatalogue/CoffeeMachines";
import coffeeMachines from '../database/coffeeMachines.json';
import '../App.css';

const CoffeeMachinesPage = () => {
    return (
            <CoffeeMachines list={coffeeMachines} />
    )
}


export default CoffeeMachinesPage;