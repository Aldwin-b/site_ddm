import React, { useEffect } from "react";
import ddm_pic from "./images/ddm_pic.png";
import ddm_pic_mobile from "./images/ddm_pic_mobile.png";

const Header = () => {
  const screenWidth = window.innerWidth;

  useEffect(() => {
    if (screenWidth >= 800) {
      const dropdowns = document.querySelectorAll(".navBar_text");

      const showMenu = (event) => {
        const menu = event.currentTarget.querySelector(".dropdown-menu");
        if (menu) {
          menu.style.display = "block";
        }
      };

      const hideMenu = (event) => {
        const menu = event.currentTarget.querySelector(".dropdown-menu");
        if (menu) {
          menu.style.display = "none";
        }
      };

      dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("mouseenter", showMenu);
        dropdown.addEventListener("mouseleave", hideMenu);
      });

      // Cleanup function to remove event listeners
      return () => {
        dropdowns.forEach((dropdown) => {
          dropdown.removeEventListener("mouseenter", showMenu);
          dropdown.removeEventListener("mouseleave", hideMenu);
        });
      };
    }
  }, [screenWidth]);

  if (screenWidth >= 800) {
    return (
      <nav>
        <div className="header">
          <div className="navBar">
            <div className="navBar_text">
              <div className="navBar_title">LE FESTIVAL ▾</div>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/festival">
                  Le festival
                </a>
                <a className="dropdown-item" href="/benevoles">
                  Les bénévoles
                </a>
                <a className="dropdown-item" href="/partenaires">
                  Les partenaires
                </a>
              </div>
            </div>
          </div>
          <div className="navBar">
            <div className="navBar_text">
              <div className="navBar_title">LES MATCHS D'IMPROS ▾</div>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/matchsimpro?match=1">
                  Prochaine édition
                </a>
                <a className="dropdown-item" href="/matchsimpro?match=2">
                  Éditions précédentes
                </a>
                <a className="dropdown-item" href="/matchsimpro?match=3">
                  Vocabulaire
                </a>
              </div>
            </div>
          </div>
          <div className="navBar">
            <a href="/">
              <img className="logo" src={ddm_pic} alt="" />
            </a>
          </div>
          <div className="navBar">
            <div className="navBar_text">
              <div className="navBar_title">LES COURS ▾</div>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/cours">
                  Présentation des cours
                </a>
              </div>
            </div>
          </div>
          <div className="navBar">
            <div className="navBar_text">
              <div className="navBar_title">INFORMATIONS PRATIQUES ▾</div>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/programmation">
                  Programmation
                </a>
                <a className="dropdown-item" href="/tarifs">
                  Tarifs
                </a>
                <a className="dropdown-item" href="/venir">
                  Comment venir ?
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="header_mobile">
          <div className="central_logo">
            <a href="/">
              <img className="logo" src={ddm_pic_mobile} alt="" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
};

export default Header;
