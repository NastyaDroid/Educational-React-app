import React, { useContext, useState } from 'react';
import { AuthContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    function submitForm(e) {
        e.preventDefault();
        const localStorageUSers = localStorage.getItem('users'); 
        const users = JSON.parse(localStorageUSers);

        const getCurrentUser = users.find((user) =>
            (user.email === email && user.password === password))
        
        if(getCurrentUser) {
            login();
            return navigate('/profile');
        }
        return alert('no such user');
        }

        return (
            <form className="main__form form" method="post" action="submit.html" onSubmit={submitForm}>
                <h1 className="form__title title">Авторизация на сайте</h1>
                <div className="form__input-wrapper">
                    <label className="form__label" htmlFor="user-email">Email *</label>
                    <input className="form__input" 
                    id="user-email" 
                    type="email" 
                    placeholder="Введите email"
                    value={email}
                    onChange = {handleEmail} 
                    required />
                </div>
                <div className="form__input-wrapper">
                    <label className="form__label" htmlFor="user-password">Пароль *</label>
                    <input className="form__input" 
                     id="user-password" 
                     type="password" 
                     placeholder="Введите пароль"
                     value={password}
                     onChange = {handlePassword} 
                     required />
                </div>

            <button id="button" className="form__btn btn" type="submit">Авторизоваться</button>
        </form>

        )
}
export default Login;