import logo from '../../images/Logo.svg';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <img src={logo.src} alt="Логотип" className="header__logo" />
    </header>
  );
}
export default Header;