'use client';

import { Field, Formik } from 'formik';
import style from './Login.module.scss';
import styleButton from '../Button/Button.module.scss';
import { useState } from 'react';

interface LoginValues {
  email: string,
  password: string,
}

export default function Login() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const initialValues: LoginValues = { email: '', password: '' };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <section className={style.login}>
      <h2 className={style.login__title}>Войти в систему</h2>
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors = {};
          const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (!values.email) {
            errors.email = 'Укажите email.';
          } else if (!EMAIL_REGEXP.test(values.email)) {
            errors.email = 'Формат почты неправильный.';
          }

          if (!values.password) {
            errors.password = 'Укажите пароль.';
          }

          return errors;
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <p className={style.login__text}>E-mail</p>
              <Field
                type='email'
                name='email'
                value={values.email}
                className={`${touched.email && errors.email ? `${style.login__input} ${style.login__input_error}` : style.login__input}`}
              />
              <span className={`${style.login__errorMessage} ${errors.email ? style.login__errorMessage_active : ''}`} id="email-error">{touched.email && errors.email}</span>
            </div>

            {/* Пароль */}
            <div>
              <p className={style.login__text}>Пароль</p>
              <div className={style.login__wrapper}>
                <Field
                  type={`${passwordVisibility ? 'text' : 'password'}`}
                  name='password'
                  value={values.password || ''}
                  className={`${touched.password && errors.password ? `${style.login__input} ${style.login__input_error}` : style.login__input}`}
                  />
                <button
                  type='button'
                  className={`${!passwordVisibility ? style.password__btn : `${style.password__btn} ${style.password__btn_active}`}`}
                  onClick={togglePasswordVisibility}
                ></button>
              </div>
              <span className={style.login__errorMessage} id="password-error">{touched.password && errors.password}</span>

            </div>

            {/* Чекбокс */}
            <div>
              <label className={style.login__checkbox}>
                <input type="checkbox" className={style.checkbox_type_invisible}/>
                <span className={style.checkbox_type_visible}/>
                <p className={style.checkbox__text}>Запомнить меня</p>
              </label>
            </div>

            {/* Сабмит */}
            <button
              //className={`${isValid ? styleButton.button : `${styleButton.button} ${styleButton.button_invalid}`}`}
              type="submit" disabled={isSubmitting}>
              Войти
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
}