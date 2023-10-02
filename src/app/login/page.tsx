'use client';

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
    <section className="form">
      <div className='form__container'>
        <h2 className="form__title">Войти в систему</h2>
        <form className="form__form" onSubmit={handleSubmit}>
          <div>

            {/* Email */}
            <div className='form__area'>
              <p className="form__text">E-mail</p>
              <input className={`${errors.email ? 'form__input form__input_error' : 'form__input'}`}
                value={values.email || ''} onChange={handleChange}
                name='email' type='email'
                required />
              <span className="form__error-message" id="email-error">{errors.email}</span>
            </div>

            {/* Пароль */}
            <div className='form__area'>
              <p className="form__text">Пароль</p>
              <input className={`${errors.password ? 'form__input form__input_error' : 'form__input'}`}
                value={values.password || ''} onChange={handleChange}
                name='password'
                type={`${passwordVisibility ? 'text' : 'password'}`} required />
              <button className='' onClick={showPassword}></button>
              <span className="form__error-message" id="password-error">{errors.password}</span>
            </div>

          </div>

          {/* Чекбокс */}
          <div className="from__toggle">
            <label className="from__tumbler">
              <input type="checkbox" className="from__invisible-checkbox" />
              <span className="from__visible-checkbox" />
            </label>
            <p className="from__text">Запомнить меня</p>
          </div>

          {/* Сабмит */}
          <button className={`${isValid ? 'form__submit' : 'form__submit form__submit_invalid'}`} type="submit" disabled={!isValid}>
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}