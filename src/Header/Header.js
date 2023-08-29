import logo from "../images/Logo.png";
import ellipse from "../images/Ellipse.png";
import "./Header.css";

function Header() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const location = "New York";

  return (
    <div className="header">
      <div className="header__logo-time-place">
        <img src={logo} className="header__logo" alt="Logo" />
        <p className="header__date-place">{currentDate + ", " + location}</p>
      </div>
      <div className="header__add-clothes-user-details">
        <button type="text" className="header__add-clothes">
          + Add Clothes
        </button>
        <p className="header__user-name">Terrence Tegegne</p>
        <img src={ellipse} className="header__user-image" alt="User" />
      </div>
    </div>
  );
}

export default Header;
