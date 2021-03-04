import logo from '../images/header/logo.svg';
// import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Место Россия" className="header__logo" />
    </header>
  );
}

export default Header;