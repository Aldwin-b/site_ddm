import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "./hooks/useIsMobile";
import ddm_pic from "./images/ddm_pic.png";
import ddm_pic_mobile from "./images/ddm_pic_mobile.png";

const NAV_ITEMS = [
  {
    label: "LE FESTIVAL",
    links: [
      { to: "/festival", label: "Le festival" },
      { to: "/engagement", label: "Engagements" }, // Conservé ici pour le mobile
      { to: "/benevoles", label: "Les bénévoles" },
      { to: "/partenaires", label: "Les partenaires" },
    ],
  },
  {
    label: "LES MATCHS D'IMPRO",
    links: [
      { to: "/matchsimpro?match=1", label: "Édition 2025" },
      { to: "/matchsimpro?match=2", label: "Éditions précédentes" },
      { to: "/matchsimpro?match=3", label: "Vocabulaire" },
    ],
  },
  {
    label: "LES COURS",
    links: [{ to: "/cours", label: "Présentation des cours" }],
  },
  {
    label: "INFORMATIONS PRATIQUES",
    links: [
      { to: "/programmation", label: "Programmation" },
      { to: "/tarifs", label: "Tarifs" },
      { to: "/venir", label: "Comment venir ?" },
    ],
  },
];

const DropdownItem = ({ label, links }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="navBar_text"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="navBar_title">{label} ▾</div>

      <div className={`dropdown-menu ${open ? "show" : ""}`}>
        {links.map(({ to, label }) => (
          <Link
            key={to}
            className="dropdown-item"
            to={to}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    // Nettoyage : On génère une liste Desktop sans l'onglet Engagement
    const desktopItems = NAV_ITEMS.map((item) => ({
      ...item,
      links: item.links.filter((link) => link.to !== "/engagement"),
    }));

    return (
      <nav>
        <div className="header">
          {desktopItems.slice(0, 2).map((item) => (
            <div key={item.label} className="navBar">
              <DropdownItem {...item} />
            </div>
          ))}

          <div className="navBar">
            <Link to="/">
              <img className="logo" src={ddm_pic} alt="Drôles de Mômes" />
            </Link>
          </div>

          {desktopItems.slice(2).map((item) => (
            <div key={item.label} className="navBar">
              <DropdownItem {...item} />
            </div>
          ))}
        </div>
      </nav>
    );
  }

  // --- VERSION MOBILE ---
  return (
    <nav>
      <div className="header_mobile">
        <div className="central_logo">
          <Link to="/">
            <img className="logo" src={ddm_pic_mobile} alt="Drôles de Mômes" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
