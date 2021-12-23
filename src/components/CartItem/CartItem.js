import { useContext } from "react";
import { CartContext } from "../../CartContext";
import './CartItem.css';

const CartItem = (props) => {
    const cart = useContext(CartContext)
    return (
        <tr className="cart__row">
            <td className="cart__cell">{props.name}</td>
            <td className="cart__cell">{props.quantity}</td>
            <td className="cart__cell">{props.price}</td>
            <td className="cart__cell">{props.price * props.quantity}</td>
            <td className="cart__cell">
            <button className="cart__remove-btn" onClick={() => cart.remove(props.id)}>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
                    <path d="M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12c1.657,0,3,1.343,3,3v12	C21,19.657,19.657,21,18,21z" opacity=".35"/>
                    <path d="M14.812,16.215L7.785,9.188c-0.384-0.384-0.384-1.008,0-1.392l0.011-0.011c0.384-0.384,1.008-0.384,1.392,0l7.027,7.027	c0.384,0.384,0.384,1.008,0,1.392l-0.011,0.011C15.82,16.599,15.196,16.599,14.812,16.215z"/>
                    <path d="M7.785,14.812l7.027-7.027c0.384-0.384,1.008-0.384,1.392,0l0.011,0.011c0.384,0.384,0.384,1.008,0,1.392l-7.027,7.027	c-0.384,0.384-1.008,0.384-1.392,0l-0.011-0.011C7.401,15.82,7.401,15.196,7.785,14.812z"/>
                </svg>
            </button>
            </td>
        </tr>
    )
}

export default CartItem;