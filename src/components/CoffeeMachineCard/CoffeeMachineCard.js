import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getData} from "../../api/getData";
import './ProductDescription.css';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

const CoffeeMachineCard= () => {
    const cart = useContext(CartContext);
    const [machine, setMachine] = useState(null);
    const {name} = useParams();
    
    useEffect(() => {
        getData('/database/coffeeMachines.json').then((res) => {
            const {data} = res;
            const result = data.find((item) => item.name === name)
            setMachine(result)
        })
    }, [name])

    if (!machine) {
        return (
            <div>Загружаем...</div>
        )
    }
           return (
            <div className='card__container card'>
                <div className='card__info'>
                    <h2 className='card__title'>{name}</h2>
                    <img className='card__image' src={`${process.env.PUBLIC_URL}/${machine.url}`}  alt={machine.name} width={500} height={500}/>
                    <h3 className='card__subtitle'>Описание</h3>
                    <p className='card__description'>{machine.description}</p>
                </div>
                <div className='card__aside'>
                    <p className='card__price'>{machine.price} P</p>
                    <button className='card__btn btn' onClick={() => cart.append(machine, 1)}>Добавить в корзину</button>
                </div>
            </div>
           )
    }

export default CoffeeMachineCard;