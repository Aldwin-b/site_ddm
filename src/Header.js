import "./site_styles.css";
import ddm_pic from "./images/ddm_pic.png";

const Header = () => {
  return (
    <nav>
      <div className="header">
        <p>LE FESTIVAL</p>
        <p>LES MATCHS D'IMPROS</p>
        <img src={ddm_pic} alt="" />
        <p>LES COURS</p>
        <p>INFORMATIONS</p>
      </div>
    </nav>
  );
};

export default Header;
