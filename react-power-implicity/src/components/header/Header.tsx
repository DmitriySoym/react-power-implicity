import "./Header.scss";
import { ReactComponent as LogoIcon } from "../../assets/icons/apple-logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <LogoIcon className="header__logo" />

      <nav className="header__nav">
        <a className="header__nav header__nav--link">Features</a>
        <a className="header__nav header__nav--link">Partners</a>
        <a className="header__nav header__nav--link">Stories</a>
      </nav>

      <button className="header__button" type="submit">
        Download for free
      </button>
    </header>
  );
};
