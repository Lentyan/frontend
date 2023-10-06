'use client';
import { useUrl } from 'nextjs-current-url';

import Link from 'next/link';
import logo from '../../images/Logo.svg';
import exit from '../../images/door_exit.svg';
import style from './Header.module.scss';

function Header() {

  const { pathname } = useUrl() ?? {};
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        < img src={logo.src} alt="Логотип" className={style.header__logo} />
        <nav className={style.header__nav}>
          <Link href={'/forecast'} className={`${style.header__navItem} ${pathname === '/forecast' ? style.header__navItem_active : ''}`}>Прогноз</Link >
          <Link href={'/statistics'} className={`${style.header__navItem} ${pathname === '/statistics' ? style.header__navItem_active : ''}`}>Качество прогноза</Link>
        </nav>
      </div>
      <div className={style.header__container}>
        <p>Васнецова Мария</p>
        <img src={exit.src} className={style.header__exit} />
      </div>
    </header >
  );
}
export default Header;