import { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = (props) => {
    const [allPurchases, setAllPurchases] = useState(localStorage.getItem('purchases') ? JSON.parse(localStorage.getItem('purchases')) : []); 
    const [showAlert, setShowAlert] = useState(null);

    const setAllPurchasesLocally
     = (newPurchase) => {
        setAllPurchases(newPurchase);
        localStorage.setItem('purchases', JSON.stringify(newPurchase))
    }

    const append = (item, quantity = 1) => {
        const itemIndex = allPurchases.findIndex(value => value.id === item.id);
        if(itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: quantity
            };
            setAllPurchasesLocally
            ([...allPurchases, newItem]);
        } else {
            const newItem = {
                ...allPurchases[itemIndex],
                quantity: allPurchases[itemIndex].quantity + quantity
            };
            const newCart = allPurchases.slice();
            newCart.splice(itemIndex, 1, newItem);
            setAllPurchasesLocally
            (newCart);
        }
        setShowAlert('+'+ item.name);
    };

    const remove = (id) => {
        const newCart = allPurchases.filter(item => item.id !== id);
        setAllPurchasesLocally
        (newCart);
    }

    const hideAlert = () => setShowAlert(null);

    const value = {
        items: allPurchases,
        append: append,
        remove: remove,
        showAlert: showAlert,
        hideAlert: hideAlert,
    };

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );
}
export {CartContext, CartContextProvider}