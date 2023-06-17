import "./site_styles.css";
import concert from "./images/concert.png";

const Tarifs = () => {
  return (
    <div className="tarifs_container">
      <div className="tarifs_infos">
        <div className="tarifs_title">
          <div className="title">Tarifs</div>
        </div>
        <div className="tarifs_details">
          <div className="tarifs tarifs_l">
            <div className="tarifs_subtitle">
              <div>PASS 2 JOURS</div>
              <div>PRIX</div>
            </div>
            <div className="tarifs_j">
              <div className="tarifs_element">
                <div className="tarifs_text"> Plein tarif</div>
                <div className="tarifs_text">25.00€</div>
              </div>
              <div className="tarifs_element">
                <div className="tarifs_text">Moins de 12 ans</div>
                <div className="tarifs_text">12.50€</div>
              </div>
            </div>
            <div className="tarifs_subtitle">
              <div>VENDREDI 14 JUILLET</div>
              <div>PRIX</div>
            </div>
            <div className="tarifs_j">
              <div className="tarifs_element">
                <div className="tarifs_text">Plein tarif</div>
                <div className="tarifs_text">16.00€</div>
              </div>
              <div className="tarifs_element">
                <div className="tarifs_text">Moins de 12 ans</div>
                <div className="tarifs_text">8.00€</div>
              </div>
            </div>
          </div>
          <div className="tarifs tarifs_r">
            <div className="tarif_normaux">
              <div className="tarifs_subtitle">
                <div>SAMEDI 15 JUILLET</div>
                <div>PRIX</div>
              </div>
              <div className="tarifs_element">
                <div className="tarifs_text">Spectacle jeune public</div>
                <div className="tarifs_text">5.00€</div>
              </div>
              <div>
                <div className="tarifs_head">
                  <div>JOURNEE COMPLETE</div>
                </div>
                <div className="tarifs_element">
                  <div className="tarifs_text">Plein tarif</div>
                  <div className="tarifs_text">16.00€</div>
                </div>
                <div className="tarifs_element">
                  <div className="tarifs_text">Moins de 12 ans</div>
                  <div className="tarifs_text">8.00€</div>
                </div>
              </div>
              <div>
                <div className="tarifs_head">
                  <div>A PARTIR DE 14H</div>
                </div>
                <div className="tarifs_element">
                  <div className="tarifs_text">Plein Tarif</div>
                  <div className="tarifs_text">20.00€</div>
                </div>
                <div className="tarifs_element">
                  <div className="tarifs_text">Moins de 12 ans</div>
                  <div className="tarifs_text">10.00€</div>
                </div>
              </div>
            </div>
            <div className="tarifs_infos_bonus">
              <div className="tarifs_bonus">
                <div className="tarifs_bonus_text">
                  Boisson offerte si vous arrivez dès 14h
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tarifs_band">
        <img className="tarif_pic" src={concert} alt="concert logo"></img>
        <div className="banderole_text">CONCERTS DU SOIR GATUITS !</div>
        <img className="tarif_pic" src={concert} alt="concert logo"></img>
      </div>
    </div>
  );
};

export default Tarifs;
