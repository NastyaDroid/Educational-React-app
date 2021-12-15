import React from "react";
import orders from '../../database/orders.json';

const PurchaseHistory = (props) => {
    return (
        <div>
            <h2>Заказы</h2>
            <table>
                <thead>
                    <tr>
                        <th>№ Заказа</th>
                        <th>Дата заказа</th>
                        <th>Доставка</th>
                        <th>Статус</th>
                        <th>Сумма заказа</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(item => (
                        <tr key={item.number}>
                            <td>{item.number}</td>
                            <td>{item.date}</td>
                            <td>{item.delivery}</td>
                            <td>{item.status}</td>
                            <td>{item.sum}</td>
                        </tr>
                    ))}
                    {/* <tr>
                        <td>976739</td>
                        <td>05.04.2021</td>
                        <td>Доставка до пункта выдачи</td>
                        <td>Доставлен и оплачен</td>
                        <td>1740 руб</td>
                    </tr>
                    <tr>
                        <td>773999</td>
                        <td>02.20.2021</td>
                        <td>Курьерская доставка</td>
                        <td>Доставлен и оплачен</td>
                        <td>9500 руб</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default PurchaseHistory;