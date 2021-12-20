import React from "react";
import Card from '../Card/Card';
import './Catalog.css';

const Catalog = (props) => {
  return (
    <section className='section__container'>
      {props.list.map((card) => {
        return (
          <Card key={card.objectID} card={card} />
        )
      })
      }
    </section>
  )
}
export default Catalog;