import "./site_styles.css";
import ddm_pic from "./images/ddm_pic.png";

const Header = () => {
  return (
    <nav>
      <div className="header">
        <span className="navBar">LE FESTIVAL</span>
        <span className="navBar">LES MATCHS D'IMPROS</span>
        <span className="navBar">
          <img src={ddm_pic} alt="" />
        </span>
        <span className="navBar">LES COURS</span>
        <span className="navBar">INFORMATIONS</span>
      </div>
    </nav>
  );
};

export default Header;
