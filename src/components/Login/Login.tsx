'use client';

import style from './Login.module.scss';
import styleButton from '../Button/Button.module.scss';
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
    <section className={style.login}>
      <div>
        <h2 className={style.login__title}>Войти в систему</h2>
        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div >
            <p className={style.login__text}>E-mail</p>
            <input className={`${errors.email ? `${style.login__input} ${style.login__input_error}` : style.login__input}`}
              value={values.email || ''} onChange={handleChange}
              name='email' type='email'
              required />
            <span className={style.login__errorMessage} id="email-error">{errors.email}</span>
          </div>

          {/* Пароль */}
          <div>
            <p className={style.login__text}>Пароль</p>
            <div className={style.login__wrapper}>
              <input className={`${errors.password ? `${style.login__input} ${style.login__input_error}` : style.login__input}`}
                value={values.password || ''} onChange={handleChange}
                name='password'
                type={`${passwordVisibility ? 'text' : 'password'}`} required />
              <button className={`${!passwordVisibility ? style.password__btn : `${style.password__btn} ${style.password__btn_active}`}`} onClick={showPassword}></button>
            </div>
            <span className={style.login__errorMessage} id="password-error">{errors.password}</span>
          </div>

          {/* Чекбокс */}
          <div>
            <label className={style.login__checkbox}>
              <input type="checkbox" className={style.checkbox_type_invisible} />
              <span className={style.checkbox_type_visible} />
              <p className={style.checkbox__text}>Запомнить меня</p>
            </label>
          </div>

          {/* Сабмит */}
          <button className={`${isValid ? styleButton.button : `${styleButton.button} ${styleButton.button_invalid}`}`} type="submit" disabled={!isValid}>
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}