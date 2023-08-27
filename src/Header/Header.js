import logo from "../images/Logo.png";
import ellipse from "../images/Ellipse.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo-time-place">
        <img src={logo} className="header__logo" alt="Logo" />
        <p className="header__date-place">June 15, New York</p>
      </div>
      <div className="header__add-clothes-user-details">
        <p className="header__add-clothes">+ Add Clothes</p>
        <p className="header__user-name">Terrence Tegegne</p>
        <img src={ellipse} className="header__user-image" alt="user image" />
      </div>
    </div>
  );
}

export default Header;
