import React from "react";
import Card from './Card';
import './CoffeeMachines.css';

const CoffeeMachines = (props) => {
    return (
        <section className='main__product-list'>
        {props.list.map((card) => {
          return ( 
            <Card key={card.objectID} card={card} />
          )})
  }
      </section>
    )
}
export default CoffeeMachines;