import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import './UserProfile.css';



const UserProfile = () => {
    const { isAuth, logout } = useAuth();

    if (!isAuth) {
        return (
            <section className='user__container user user_notAuth'>
                <h2 className='title' >Личные данные</h2>
                <p>Для просмотра личного кабинета необходима авторизация</p>
                {!isAuth &&
                    <Link to="/login" className='link'><button className='user__btn btn'>
                        Войти
                    </button> </Link>}
            </section>
        )
    }

    return (
        <section className='user__container user user_isAuth '>
            <h1 className='user__title title'>Личный кабинет</h1>
            <aside className='user__aside'>
                <ul className='user__aside-list'>
                    <li className='user__aside-list-item'>
                        <Link to='/' className='user__aside-list-link link'>Главная</Link>
                    </li>
                    <li className='user__aside-list-item'>
                        <Link to='*' className='user__aside-list-link link'>Мои заказы</Link>
                    </li>
                    <li className='user__aside-list-item'>
                        <Link to='*' className='user__aside-list-link link'>Оформить возврат</Link>
                    </li>
                    <li className='user__aside-list-item'>
                        <Link to='*' className='user__aside-list-link link'>Оплата заказа</Link>
                    </li>
                    <li className='user__aside-list-item'>
                        <Link to='*' className='user__aside-list-link link'>Изменить пароль</Link>
                    </li>
                </ul>
            </aside>
            <section className='user__section'>
                <h2 className='user__section-title title' >Личные данные</h2>
                <table className='user__section-table'>
                    <tbody>
                        <tr>
                            <td>Имя: </td>
                            <td>Анастасия Власенко</td>
                        </tr>
                        <tr>
                            <td>Пол:</td>
                            <td>Женский</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>user</td>
                        </tr>
                    </tbody>
                </table>
                {isAuth && <button className='user__btn btn' onClick={logout}>Выйти из профиля</button>}
            </section>
        </section>

    )
}

export default UserProfile;