import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import ddm_white from "./images/logo_W.png";
import ddm_pic from "./images/ddm_pic.png";
import menu from "./images/menu.jpg";
import fb_w from "./images/fb_w.png";
import insta_w from "./images/insta_w.png";
import "./site_styles.css";

const Header = () => {
  const screenWidth = window.innerWidth;
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    if (isDropdownVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDropdownVisible]);

  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleOverlayClose = () => {
    setIsDropdownVisible(false);
  };

  const handleOverlayClick = (event) => {
    // Empêcher la propagation du clic à l'élément parent
    event.stopPropagation();
  };

  if (screenWidth >= 800) {
    return (
      <nav>
        <div className="header">
          <div className="navBar">
            <div className="navBar_text">
              <NavDropdown title="LE FESTIVAL" id="basic-nav-dropdown">
                <NavDropdown.Item href="/festival">
                  Le festival
                </NavDropdown.Item>
                <NavDropdown.Item href="/benevoles">
                  Les bénévoles
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
          <div className="navBar">
            <div className="navBar_text">
              <NavDropdown title="LES MATCHS D'IMPROS" id="basic-nav-dropdown">
                <NavDropdown.Item href="/matchsimpro">
                  Les matchs
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
          <div className="navBar">
            <Navbar.Brand href="/">
              <img className="logo" src={ddm_pic} alt="" />
            </Navbar.Brand>
          </div>
          <div className="navBar">
            <div className="navBar_text">
              <NavDropdown title="LES COURS" id="basic-nav-dropdown">
                <NavDropdown.Item href="/cours">
                  Présentation des cours
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
          <div className="navBar">
            <div className="navBar_text">
              <NavDropdown
                title="INFORMATIONS PRATIQUES"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/programmation">
                  Programmation 2023
                </NavDropdown.Item>
                <NavDropdown.Item href="/tarifs">Tarifs</NavDropdown.Item>
                <NavDropdown.Item href="/venir">
                  Comment venir ?
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="header_mobile">
          <div
            className={`menu navBar_text ${isDropdownVisible ? "active" : ""}`}
            onClick={handleDropdownToggle}
          >
            <img className="menu_logo" src={menu} alt="" />

            {isDropdownVisible && (
              <div className="overlay" onClick={handleOverlayClick}>
                <div className="overlay_main">
                  <div className="overlay_header">
                    <a className="menu_link" href="/">
                      <img className="logoW" src={ddm_white} alt="" />
                    </a>
                    <div className="text_overlay">
                      Du 14 au 15 juillet 2023 au lac de Montendre
                    </div>
                    <a className="link" href="/programmation">
                      <div className="nav_sub">PROGRAMMATION</div>
                    </a>
                  </div>
                  <div className="nav_mobile">
                    <div className="nav_menu">
                      <div className="nav_title">
                        <a className="link" href="/festival">
                          LE FESTIVAL
                        </a>
                      </div>
                      <div className="nav_sub">
                        <a className="link" href="/festival">
                          PRÉSENTATION
                        </a>
                      </div>
                      <a className="link" href="/engagement">
                        <div className="nav_sub">NOS ENGAGEMENTS</div>
                      </a>
                      <a className="link" href="/benevoles">
                        <div className="nav_sub">LES BÉNÉVOLES</div>
                      </a>
                    </div>
                    <div className="nav_menu">
                      <a className="link" href="/matchsimpro">
                        <div className="nav_title">LES MATCHS D'IMPRO</div>
                      </a>
                    </div>
                    <div className="nav_menu">
                      <a className="link" href="/cours">
                        <div className="nav_title">LES COURS</div>{" "}
                      </a>
                    </div>
                    <div className="nav_menu">
                      <a className="link" href="/tarifs">
                        <div className="nav_title">INFORMATIONS</div>
                      </a>
                      <a className="link" href="/tarifs">
                        <div className="nav_sub">TARIFS</div>
                      </a>
                      <a className="link" href="/venir">
                        <div className="nav_sub">COMMENT VENIR</div>
                      </a>
                    </div>
                  </div>
                  <div className="overlay_footer">
                    <a className="link_rs" href="fb://page/115574428470193">
                      <img className="rs_w" src={fb_w} alt="Facebook" />
                    </a>
                    <a
                      className="link_rs"
                      href="instagram://user?username=droles2momes"
                    >
                      <img className="rs_w" src={insta_w} alt="Instagram" />
                    </a>
                  </div>
                </div>
                <div className="close_container">
                  <div className="close_button" onClick={handleOverlayClose}>
                    X
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="central_logo">
            <a className="link_main" href="/">
              <img className="logo" src={ddm_pic} alt="" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
};

export default Header;
