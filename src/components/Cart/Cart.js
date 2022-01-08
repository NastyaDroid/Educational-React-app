import React from "react";
import CartList from "../CartList/CartList";
import { useAuth } from '../../AuthContext';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = () => {
    const { isAuth } = useAuth();

    if (!isAuth) {
        return (
            <div className="cart__container">
                <CartList />
                <div className="cart__notification">
                <p>Чтобы оформить заказ необходимо войти в профиль</p>
                {!isAuth &&
                    <Link to="/login" className='link'>
                        <button className='cart__btn btn'>
                            Войти
                        </button>
                    </Link>
                }
                </div>
            </div>
        )
    }
    return (
        <div className="cart__container">
            <CartList />
            {/* <button className="cart__btn btn">Оформить заказ</button> */}
        </div>
    )
}


export default Cart;