import "./site_styles.css";
import musique from "./images/musique.png";
import React, { useEffect, useState } from "react";

const Tarifs = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="tarifs_container">
      <div className="tarifs_infos">
        <div className="tarifs_title">
          <div className="title mobile_page_title">Tarifs</div>
        </div>
        <div className="tarifs_details">
          <div className="tarifs">
            <div className="tarifs_day">
              <div className="tarifs_subtitle">
                <div>PASS 2 JOURS</div>
                <div>PRIX</div>
              </div>
              <div className="tarifs_element">
                <div className="tarifs_text"> Plein tarif</div>
                <div className="tarifs_text">25.00€</div>
              </div>
              <div className="tarifs_element">
                <div className="tarifs_text">Moins de 12 ans</div>
                <div className="tarifs_text">12.50€</div>
              </div>
            </div>
            <div className="tarifs_day">
              <div className="tarifs_subtitle tarifs_vendredi">
                <div>VENDREDI 12 JUILLET</div>
                <div>PRIX</div>
              </div>

              <div>
                <div className="tarifs_element">
                  <div className="tarifs_text">Plein tarif</div>
                  <div className="tarifs_text">12.00€</div>
                </div>
                <div className="tarifs_element">
                  <div className="tarifs_text">Moins de 12 ans</div>
                  <div className="tarifs_text">6.00€</div>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="tarifs">
            <div className="tarifs_day">
              <div className="tarifs_subtitle">
                <div>SAMEDI 13 JUILLET</div>
                <div>PRIX</div>
              </div>
              <div className="tarifs_element">
                <div className="tarifs_text">Spectacle jeune public</div>
                <div className="tarifs_text">5.00€</div>
              </div>
              <div>
                <div className="tarifs_head">
                  <div>JOURNÉE COMPLÈTE</div>
                </div>
                <div className="tarifs_element">
                  <div className="tarifs_text">Plein tarif</div>
                  <div className="tarifs_text">20.00€</div>
                </div>
                <div className="tarifs_element">
                  <div className="tarifs_text">Moins de 12 ans</div>
                  <div className="tarifs_text">10.00€</div>
                </div>
              </div>
              <div>
                <div className="tarifs_head">
                  <div>À PARTIR DE 14H</div>
                </div>
                <div className="tarifs_element">
                  <div className="tarifs_text">Plein tarif</div>
                  <div className="tarifs_text">16.00€</div>
                </div>
                <div className="tarifs_element">
                  <div className="tarifs_text">Moins de 12 ans</div>
                  <div className="tarifs_text">8.00€</div>
                </div>
                <div className="tarifs_bonus">
                  <div className="tarifs_element tarifs_bonus_text ">
                    {isSmallScreen
                      ? "( Boisson offerte si vous arrivez avant 14h )"
                      : " Boisson offerte si vous arrivez dès 14h"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tarifs_band">
        <img className="tarif_pic" src={musique} alt="concert logo"></img>
        <div className="banderole_text">CONCERTS DU SOIR GRATUITS</div>
        <img className="tarif_pic" src={musique} alt="concert logo"></img>
      </div>
    </div>
  );
};

export default Tarifs;
