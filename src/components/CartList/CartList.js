import React, { useContext } from "react";
import CartItem from '../CartItem/CartItem';
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";
import './CartList.css';
import { useAuth } from '../../AuthContext';

const CartList = () => {
    const cart = useContext(CartContext);
    const { isAuth } = useAuth();
    const cost = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    return (
        <section className="cart__container cart">
            <h2>Ваша корзина</h2>
            {cart.items.length ? (
                <>
                <table className="cart__table table">
                <thead>
                    <tr>
                        <th className="table__title">Наименование</th>
                        <th className="table__title">Количество</th>
                        <th className="table__title">Цена</th>
                        <th className="table__title">Сумма</th>
                        <th className="table__title">Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.items.map(item =>
                        <CartItem key={item.name} {...item} />
                    )}
                    <tr>
                        <td className="table__title" colSpan="3">Итого</td>
                        <td className="table__title">{cost}</td>
                        <td className="table__title">руб.</td>
                    </tr>
                </tbody>
            </table>
            {isAuth && <button className="cart__btn btn">Оформить заказ</button>}
            </>
        ) : (
            <>
                <p>Ваша корзина пуста</p>
                <Link className="link" to="/" ><button className="cart__btn btn">Начать покупки</button></Link>
            </>

        )}
        </section>
    );
}

export default CartList;