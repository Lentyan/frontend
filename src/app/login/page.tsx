export default function Login() {
  return (
    <section className="form">
      <div className='form__container'>
        <h2 className="form__title">Войти в систему</h2>
        <form className="form__form" >
          <div>
            <div className='form__area'>
              <p className="form__text">E-mail</p>
              <input className='form__input' />
            </div>
            <div className='form__area'>
              <p className="form__text">Пароль</p>
              <input className='form__input' />
            </div>
          </div>
          <button className="form__submit">
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}