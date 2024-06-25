import React, { useState, useEffect } from "react";
//import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

import ddm from "./images/ddm_pic.png";
import ddm_pic_mobile from "./images/ddm_pic_mobile.png";

import menu from "./images/menu.png";
import prog from "./images/icone_prog.png";
import lieu from "./images/icone_lieu.png";
import billets from "./images/icone_billet.png";

import fb_w from "./images/fb_w.png";
import insta_w from "./images/insta_w.png";
import mail from "./images/mail.png";
import "./site_styles.css";

const Footer = () => {
  const screenWidth = window.innerWidth;
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navFb = () => {
    if (screenWidth >= 800) {
      window.open(
        "https://www.facebook.com/profile.php?id=100063738302856",
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      window.open("fb://page/115574428470193", "_blank", "noopener,noreferrer");
    }
  };
  const navInsta = () => {
    if (screenWidth >= 800) {
      window.open(
        "https://www.instagram.com/droles2momes/",
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      window.open(
        "instagram://user?username=droles2momes",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

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
  const handleMailClick = (e) => {
    e.preventDefault();
    window.open("mailto:machineabulles@orange.fr");
  };

  if (screenWidth >= 800) {
    return (
      <div className="footer">
        <div className="footer_logo">
          <a href="/">
            <img className="footer_img" src={ddm} alt="" />
          </a>
        </div>
        <div className="footer_links">
          <a className="link text_small_W" href="/programmation">
            PROGRAMMATION 2024
          </a>
          <a className="link text_small_W" href="/venir">
            COMMENT VENIR
          </a>
          <a className="link text_small_W" href="/tarifs">
            TARIFS
          </a>
        </div>
        <div className="footer_contact">
          <div className="footer_text">NOUS CONTACTER</div>
          <a href="mailto:machinesabulles@orange.fr" onClick={handleMailClick}>
            <img
              className="footer_mail"
              alt="Logo mail pour contacter DDM"
              src={mail}
            />
          </a>
          <div className="footer_placeholder"></div>
        </div>
        <div className="footer_networks">
          <div className="footer_text">SUIVEZ NOUS</div>
          <div className="footer_nw_logos">
            <img
              className="link_rs logo_rs"
              src={fb_w}
              alt="Facebook"
              onClick={navFb}
              style={{ cursor: "pointer" }}
            />
            <img
              className="link_rs logo_rs"
              src={insta_w}
              alt="Instagram"
              onClick={navInsta}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="footer_placeholder"></div>
        </div>
      </div>
    );
  } else {
    return (
      <nav>
        <div className="footer_mobile">
          <div
            className={`menu navBar_text ${isDropdownVisible ? "active" : ""}`}
          >
            <Link className="menu_item" to="/programmation">
              <img className="menu_logo" src={prog} alt="" />
              <div className="menu_text"> PROG</div>
            </Link>{" "}
            <Link className="menu_item" to="/venir">
              <img className="menu_logo" src={lieu} alt="" />
              <div className="menu_text">VENIR</div>
            </Link>
            <Link className="menu_item" to="/tarifs">
              <img className="menu_logo" src={billets} alt="" />
              <div className="menu_text">TARIFS</div>
            </Link>
            <div className="menu_item">
              <img
                className="menu_logo"
                src={menu}
                alt=""
                onClick={handleDropdownToggle}
              />
              <div className="menu_text">MENU</div>
            </div>
            {isDropdownVisible && (
              <div className="overlay" onClick={handleOverlayClick}>
                <div className="overlay_main">
                  <div className="overlay_header">
                    <a className="menu_link" href="/">
                      <img className="logoW" src={ddm_pic_mobile} alt="" />
                    </a>
                    <div className="text_overlay">
                      Les 12 & 13 juillet 2024 au lac de Montendre
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
                        <div className="nav_sub">ENGAGEMENTS</div>
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
                    <a
                      className="link_rs"
                      href="mailto:machinesabulles@orange.fr"
                      onClick={handleMailClick}
                    >
                      <img
                        className="rs_w"
                        alt="Logo mail pour contacter DDM"
                        src={mail}
                      />
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
        </div>
      </nav>
    );
  }
};

export default Footer;
