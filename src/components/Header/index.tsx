import logo from '../../images/Logo.svg';
import exit from '../../images/door_exit.svg';
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <img src={logo.src} alt="Логотип" className={style.header__logo} />
        <nav className={style.header__nav}>
          <a className={`${style.header__navItem} ${style.header__navItem_active}`}>Прогноз</a>
          <a className={style.header__navItem}>Качество прогноза</a>
        </nav>
      </div>
      <div className={style.header__container}>
        <p>Васнецова Мария</p>
        <img src={exit.src} className={style.header__exit} />
      </div>
    </header>
  );
}
export default Header;