'use client';

import './login.scss';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export default function Login() {

  const { values, handleChange, isValid, errors } = useForm({});
  const handleSubmit = (evt: any): void => {
    evt.preventDefault();
  };

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  function showPassword(): void {
    setPasswordVisibility(!passwordVisibility);
  }

  return (
    <section className="login">
      <div className='login__container'>
        <h2 className="login__title">Войти в систему</h2>
        <form className="login__form" onSubmit={handleSubmit}>

          {/* Email */}
          <div className='login__area'>
            <p className="login__text">E-mail</p>
            <input className={`${errors.email ? 'login__input login__input_error' : 'login__input'}`}
              value={values.email || ''} onChange={handleChange}
              name='email' type='email'
              required />
            <span className="login__error-message" id="email-error">{errors.email}</span>
          </div>

          {/* Пароль */}
          <div className='login__area'>
            <p className="login__text">Пароль</p>
            <div className='login__wrapper'>
              <input className={`${errors.password ? 'login__input login__input_error' : 'login__input'}`}
                value={values.password || ''} onChange={handleChange}
                name='password'
                type={`${passwordVisibility ? 'text' : 'password'}`} required />
              <button className={`${!passwordVisibility ? 'password__btn' : 'password__btn password__btn_active'}`} onClick={showPassword}></button>
            </div>
            <span className="login__error-message" id="password-error">{errors.password}</span>
          </div>

          {/* Чекбокс */}
          <div className="login__toggle">
            <label className="login__checkbox">
              <input type="checkbox" className="checkbox_type_invisible" />
              <span className="checkbox_type_visible" />
              <p className="checkbox__text">Запомнить меня</p>
            </label>
          </div>

          {/* Сабмит */}
          <button className={`${isValid ? 'login__submit' : 'login__submit login__submit_invalid'}`} type="submit" disabled={!isValid}>
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}