'use client';

import { useForm } from '../../hooks/useForm';

export default function Login() {

  const { values, handleChange, isValid, errors } = useForm({});
  const handleSubmit = (evt: any): void => {
    evt.preventDefault();
  };
  return (
    <section className="form">
      <div className='form__container'>
        <h2 className="form__title">Войти в систему</h2>
        <form className="form__form" onSubmit={handleSubmit}>
          <div>
            <div className='form__area'>
              <p className="form__text">E-mail</p>
              <input className={`${errors.email ? 'form__input form__input_error' : 'form__input'}`}
                value={values.email || ''} onChange={handleChange}
                name='email' type='email'
                required />
              <span className="form__error-message" id="email-error">{errors.email}</span>
            </div>
            <div className='form__area'>
              <p className="form__text">Пароль</p>
              <input className={`${errors.password ? 'form__input form__input_error' : 'form__input'}`}
                value={values.password || ''} onChange={handleChange}
                name='password'
                type="password" required />
              <span className="form__error-message" id="password-error">{errors.password}</span>
            </div>
          </div>
          <button className={`${isValid ? 'form__submit' : 'form__submit form__submit_invalid'}`} type="submit" disabled={!isValid ? true : ''}>
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}