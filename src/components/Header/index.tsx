'use client';

import Link from 'next/link';
import logo from '../../images/Logo.svg';
import exit from '../../images/door_exit.svg';
import style from './Header.module.scss';
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <img src={logo} alt="Логотип" className={style.header__logo}/>
        {pathname !== '/login' && (<nav className={style.header__nav}>
          <Link href={'/forecast'} className={`${style.header__navItem} ${pathname === '/forecast' ? style.header__navItem_active : ''}`}>Прогноз</Link >
          <Link href={'/statistics'} className={`${style.header__navItem} ${pathname === '/statistics' ? style.header__navItem_active : ''}`}>Качество прогноза</Link>
        </nav>)}
      </div>
      <div className={style.header__container}>
        <p>Васнецова Мария</p>
        <img src={exit} className={style.header__exit}/>
      </div>
    </header>
  );
}

export default Header;