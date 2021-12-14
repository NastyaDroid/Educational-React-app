import React from 'react';
import coffeeMachines from '../database/coffeeMachines.json';
import CoffeeMachineDescription from '../components/CoffeeMachineDescription/CoffeeMachineDescription';


const ProductPage = () => {
    return (
            <CoffeeMachineDescription card={coffeeMachines}/>
    )
}

export default ProductPage;