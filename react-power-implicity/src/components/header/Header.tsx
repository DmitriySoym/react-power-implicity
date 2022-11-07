import "./Header.scss";
import logo from "../../img/Vector-logo.png";

const headerlogo = (
  <div className="header__logo">
    <img src={logo} alt="logo" />
  </div>
);

const headerButton = (
  <div className="header__button">
    <button type="submit">Download for free</button>
  </div>
);

const navItem = (
  <ul className="header__nav_row">
    <li className="header__nav_item">
      <a href="#">Features</a>
    </li>
    <li className="header__nav_item">
      <a href="#">Partners</a>
    </li>
    <li className="header__nav_item">
      <a href="#">Stories</a>
    </li>
  </ul>
);
const headerNav = <nav className="header__nav">{navItem}</nav>;

export const Header = () => {
  return (
    <header className="header">
      {headerlogo}
      {headerNav}
      {headerButton}
    </header>
  );
};
