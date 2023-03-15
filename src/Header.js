import "./site_styles.css";
import ddm_pic from "./images/ddm_pic.png";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <nav>
      <div className="header">
        <div className="navBar">
          <NavDropdown title="LE FESTIVAL" id="basic-nav-dropdown">
            <NavDropdown.Item href="/festival">Le festival</NavDropdown.Item>
            <NavDropdown.Item href="/benevoles">Les bénévoles</NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="navBar">
          <NavDropdown title="LES MATCHS D'IMPROS" id="basic-nav-dropdown">
            <NavDropdown.Item href="/matchsimpro">Les matchs</NavDropdown.Item>
          </NavDropdown>
        </div>
        <Navbar.Brand href="/">
          <img className="logo" src={ddm_pic} alt="" />
        </Navbar.Brand>
        <div className="navBar">
          <NavDropdown title="LES COURS" id="basic-nav-dropdown">
            <NavDropdown.Item href="/cours">
              Présentation des cours
            </NavDropdown.Item>
          </NavDropdown>{" "}
        </div>
        <div className="navBar">
          <NavDropdown title="INFORMATIONS PRATIQUES" id="basic-nav-dropdown">
            <NavDropdown.Item href="/WIP">Tarifs</NavDropdown.Item>
            <NavDropdown.Item href="/WIP">Comment venir ?</NavDropdown.Item>
          </NavDropdown>{" "}
        </div>
      </div>
    </nav>
  );
};

export default Header;
