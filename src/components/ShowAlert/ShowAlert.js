import { useEffect, useContext } from "react";
import { CartContext } from "../../CartContext";
import './ShowAlert.css'

const ShowAlert = () => {
    const cart = useContext(CartContext);

    useEffect(() => {
        const timeoutId = setTimeout(cart.hideAlert, 2000);
        return () => clearTimeout(timeoutId);
    }, [cart.hideAlert]);
    return (
        <div className="main-show-alert">{cart.showAlert}</div>
    )
}

export default ShowAlert;