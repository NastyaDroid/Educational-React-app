import React from 'react';
import './RegistrationForm.css'

const RegistrationForm = () => {
    return (
        <div className='form__wrapper'>
            <form className="form" method="post" action="submit.html">
                <h1 className="form__title">Регистрация на сайте</h1>
                <div className="form__input-wrapper">
                    <label className="form__label" htmlFor="user-email">Email *</label>
                    <input className="form__input" id="user-email" type="email" placeholder="Введите email" />
                    <span className="form__error" aria-live="polite"></span>
                </div>
                <div className="form__input-wrapper">
                    <label className="form__label" htmlFor="user-password">Пароль *</label>
                    <input className="form__input"  id="user-password" type="password" placeholder="Введите пароль" />
                    <span className="form__error" aria-live="polite"></span>
                </div>
                <div className="form__checkbox-wrapper">
                <input className="form__checkbox" type="checkbox" id="agreement" /> 
                <label className="form__checkbox-label" htmlFor="agreement">Я согласен с<a href="/" className="form__checkbox-link"> политикой конфиденциальности</a>
                </label>
                <span className="form__error" aria-live="polite"></span>
            </div>

            <button id="button" className="form__button" type="submit">Регистрация</button>
        </form>
    </div>

    );
}

export default RegistrationForm;