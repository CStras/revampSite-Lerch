import "./Header.css";
import logo from "../../assets/LerchProperties_logovector_lg_withshadow.png";
import backImg from "../../assets/ParkviewRidge_Edwardsville_2000_thin.jpg";

function Header() {
  return (
    <>
      <div className="header">
        <img className="header__logo" src={logo} />
        <section>
          <a className="header__link" href="https://lerchproperties.net/home">
            Home
          </a>
          <a className="header__link" href="https://lerchproperties.net/home">
            About Us
          </a>
          <a className="header__link" href="https://lerchproperties.net/home">
            Application & Forms
          </a>
          <a className="header__link" href="https://lerchproperties.net/home">
            Maintaince
          </a>
          <a className="header__link" href="https://lerchproperties.net/home">
            Properties
          </a>
          <a className="header__link" href="https://lerchproperties.net/home">
            Contact
          </a>
        </section>
      </div>
      <img className="header__backgroundImg" src={backImg}></img>
    </>
  );
}

export default Header;
