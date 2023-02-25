import "./site_styles.css";
import ddm_pic from "./images/ddm_pic.png";

const Header = () => {
  return (
    <nav>
      <div className="header">
        <div className="navBar">LE FESTIVAL</div>
        <div className="navBar">LES MATCHS D'IMPROS</div>
        <div className="navBar">
          <img className="logo" src={ddm_pic} alt="" />
        </div>
        <div className="navBar">LES COURS</div>
        <div className="navBar">INFORMATIONS</div>
      </div>
    </nav>
  );
};

export default Header;
