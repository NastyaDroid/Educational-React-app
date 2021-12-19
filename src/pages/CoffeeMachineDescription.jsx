import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { machineStorage } from '../database/coffee';

const CoffeeMachineDescription = () => {
    const [machine, setMachine] = useState(null);
    const {name} = useParams();
    

    useEffect(() => {
        const res = machineStorage.find((item) => item.name === name)
        setMachine(res)
    }, [])

    if (!machine) {
        return (
            <div>Загружаем...</div>
        )
    }
           return (
            <div className='coffeeMachine-card'>
            {/* <img className='coffeMachine-card__image' src={props.card[0]["url"]} alt={props.card[0]["name"]} width={500} height={500} /> */}
            <h2>{machine.name}</h2>
            <h3>Описание</h3>
            <p>Компактная рожковая кофемашина для бытового использования в помещениях, 
            где свободное пространство на вес золота. Инженерам Rocket удалось создать 
            малогабаритную, компактную кофемашину без ущерба для качества и функциональности.
            Бойлер-котел объемом 1,8 литра и легендарная группа E61 позволяет ей ни в чем не 
            уступать своим большим собратьям в приготовлении настоящего эспрессо.
            Машину отличают быстрый нагрев и высокая стабильность температуры.
            Малые габариты (274 х 360 х 425 мм) дадут возможность сохранить свободное пространство
             там, где оно в дефиците. Функционирует от вибрационного насоса.</p>
             <p>{machine.price}</p>
             <button>Добавить в корзину</button>
            </div>
           )
    }

export default CoffeeMachineDescription;