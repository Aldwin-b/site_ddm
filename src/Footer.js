import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "./hooks/useIsMobile";

import ddm from "./images/ddm_pic.png";
import ddm_mobile from "./images/ddm_pic_mobile.png";
import menu from "./images/menu.png";
import lieu from "./images/icone_lieu.png";
import billets from "./images/icone_billet.png";
import fb_w from "./images/fb_w.png";
import insta_w from "./images/insta_w.png";
import mail from "./images/mail.png";

const SOCIAL = [
  {
    src: fb_w,
    alt: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100063738302856",
  },
  {
    src: insta_w,
    alt: "Instagram",
    url: "https://www.instagram.com/droles2momes/",
  },
];

const Footer = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  if (!isMobile) {
    return (
      <footer className="footer">
        <div className="footer_logo">
          <Link to="/">
            <img className="footer_img" src={ddm} alt="Drôles de Mômes" />
          </Link>
        </div>

        <div className="footer_links">
          <Link className="link text_small_W" to="/programmation">
            PROGRAMMATION 2026
          </Link>
          <Link className="link text_small_W" to="/venir">
            COMMENT VENIR
          </Link>
          <Link className="link text_small_W" to="/tarifs">
            TARIFS
          </Link>
        </div>

        <div className="footer_contact">
          <div className="footer_text">NOUS CONTACTER</div>
          <a href="mailto:machinabulles@orange.fr">
            <img
              className="footer_mail"
              src={mail}
              alt="Envoyer un email à DDM"
            />
          </a>
        </div>

        <div className="footer_networks">
          <div className="footer_text">SUIVEZ NOUS</div>
          <div className="footer_nw_logos">
            {SOCIAL.map(({ src, alt, url }) => (
              <a key={alt} href={url} target="_blank" rel="noopener noreferrer">
                <img className="logo_rs" src={src} alt={alt} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <nav>
      <div className="footer_mobile">
        <div className="menu">
          <Link className="menu_item" to="/venir">
            <img className="menu_logo" src={lieu} alt="" />
            <div className="menu_text">VENIR</div>
          </Link>
          <Link className="menu_item" to="/tarifs">
            <img className="menu_logo" src={billets} alt="" />
            <div className="menu_text">TARIFS</div>
          </Link>
          <button
            className="menu_item menu_item--button"
            onClick={() => setMenuOpen(true)}
          >
            <img className="menu_logo" src={menu} alt="" />
            <div className="menu_text">MENU</div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}>
          {/* stopPropagation pour ne pas fermer en cliquant dans le menu */}
          <div className="overlay_main" onClick={(e) => e.stopPropagation()}>
            <div className="overlay_header">
              <Link
                className="menu_link"
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                <img className="logoW" src={ddm_mobile} alt="Drôles de Mômes" />
              </Link>
              <div className="text_overlay">
                Les 10 & 11 juillet 2026 au lac de Montendre
              </div>
            </div>

            <nav className="nav_mobile">
              {[
                {
                  title: "LE FESTIVAL",
                  to: "/festival",
                  subs: [
                    { to: "/festival", label: "PRÉSENTATION" },
                    { to: "/engagement", label: "ENGAGEMENTS" },
                    { to: "/benevoles", label: "LES BÉNÉVOLES" },
                  ],
                },
                { title: "LES MATCHS D'IMPRO", to: "/matchsimpro" },
                { title: "LES COURS", to: "/cours" },
                {
                  title: "INFORMATIONS",
                  to: "/tarifs",
                  subs: [
                    { to: "/tarifs", label: "TARIFS" },
                    { to: "/venir", label: "COMMENT VENIR" },
                  ],
                },
              ].map(({ title, to, subs }) => (
                <div key={title} className="nav_menu">
                  <Link
                    className="link"
                    to={to}
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="nav_title">{title}</div>
                  </Link>
                  {subs?.map(({ to, label }) => (
                    <Link
                      key={to}
                      className="link"
                      to={to}
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="nav_sub">{label}</div>
                    </Link>
                  ))}
                </div>
              ))}
            </nav>

            <div className="overlay_footer">
              {SOCIAL.map(({ src, alt, url }) => (
                <a
                  key={alt}
                  className="link_rs"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="rs_w" src={src} alt={alt} />
                </a>
              ))}
              <a className="link_rs" href="mailto:machinabulles@orange.fr">
                <img className="rs_w" src={mail} alt="Email" />
              </a>
            </div>
          </div>

          <div className="close_container" onClick={() => setMenuOpen(false)}>
            ✕
          </div>
        </div>
      )}
    </nav>
  );
};

export default Footer;
