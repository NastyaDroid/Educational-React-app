import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {

    return (
        <div className='main__product-card product'>
            <p className="product__category">{card.intendedUse}</p>
            <Link to={`/coffeemachines/${card.name}`} className='product__name'>{card.name}</Link>
            <img className='product__image' src={card.url} alt={card.name} width={250} height={250} />
            <div className='product__buy'>
            <span className='product__price'>{card.price + 'P'}</span>
            <Link to={card.link} className='link'>
            <button className='product__button btn' type="button">
            <svg className="product__cart-img" width="20" height="20" viewBox="0 0 20 20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
               <path d="M18 18C18 19.11 17.11 20 16 20C14.89 20 14 19.1 14 18C14 16.89 14.89 16 16 16C17.11 16 18 16.9 18 18ZM6 16C4.89 16 4 16.89 4 18C4 19.1 4.89 20 6 20C7.11 20 8 19.11 8 18C8 16.89 7.11 16 6 16ZM6.2 12.63L6.17 12.75C6.17 12.89 6.28 13 6.42 13H18V15H6C4.89 15 4 14.1 4 13C4 12.65 4.09 12.32 4.24 12.04L5.6 9.59L2 2H0V0H3.27L4.21 2H19C19.55 2 20 2.45 20 3C20 3.17 19.95 3.34 19.88 3.5L16.3 9.97C15.96 10.58 15.3 11 14.55 11H7.1L6.2 12.63ZM7.5 9H9V7H6.56L7.5 9ZM10 7V9H13V7H10ZM13 6V4H10V6H13ZM16.11 7H14V9H15L16.11 7ZM17.78 4H14V6H16.67L17.78 4ZM5.14 4L6.08 6H9V4H5.14Z"></path>
            </svg>
            <span className='product__button-title'>В корзину</span>
            </button>
            </Link> 
            </div>
        </div>
    )
  }

export default Card;