import React from 'react';

const CoffeeMachineDescription = (props) => {
    return (
        <div className='coffeeMachine-card'>
        
        <h2>{props.card[0]["name"]}</h2>
        <img className='coffeMachine-card__image' src={props.card[0]["url"]} alt={props.card[0]["name"]} width={500} height={500} />
        <h3>Описание</h3>
        <p>Компактная рожковая кофемашина для бытового использования в помещениях, 
        где свободное пространство на вес золота. Инженерам Rocket удалось создать 
        малогабаритную, компактную кофемашину без ущерба для качества и функциональности.
        Бойлер-котел объемом 1,8 литра и легендарная группа E61 позволяет ей ни в чем не 
        уступать своим большим собратьям в приготовлении настоящего эспрессо.
        Машину отличают быстрый нагрев и высокая стабильность температуры.
        Малые габариты (274 х 360 х 425 мм) дадут возможность сохранить свободное пространство
         там, где оно в дефиците. Функционирует от вибрационного насоса.</p>
         <p>129990 P</p>
         <button>Добавить в корзину</button>
        </div>
    );
}

export default CoffeeMachineDescription;