import "./site_styles.css";
import pic from "./images/festival_pic_1.jpg";

const Tarifs = () => {
  return (
    <div className="container">
      <div className="tarifs_title">
        <span className="title">Tarifs</span>
      </div>
      <div className="tarifs_details">
        <div className="tarifs1">
          <div className="tarifs_2j"></div>
          <div className="tarifs_v"></div>
        </div>
        <div className="tarifs2">
          <div className="tarifs_s">
            <div className="tarifs_s_element">
              <span>SAMEDI 15 JUILLET</span>
              <span>PRIX</span>
            </div>
            <div className="tarifs_s_element">
              <span>Spectacle jeune public</span>
              <span>5.00€</span>
            </div>
            <div className="tarifs_s_head">
              <span>JOURNEE COMPLETE</span>
            </div>
            <div className="tarifs_s_element">
              <span>Plein tarif</span>
              <span>16.00€</span>
            </div>
            <div className="tarifs_s_element">
              <span>Moins de 12 ans</span>
              <span>8.00€</span>
            </div>
            <div className="tarifs_s_head">
              <span>A PARTIR DE 14H</span>
            </div>
            <div className="tarifs_s_element">
              <span>Plein Tarif</span>
              <span>20.00€</span>
            </div>
            <div className="tarifs_s_element">
              <span>Moins de 12 ans</span>
              <span>10.00€</span>
            </div>
          </div>
          <div className="tarifs_bonus"></div>
        </div>
      </div>
      <div className="tarifs_band">
        <img></img>
        <span></span>
        <img></img>
      </div>
    </div>
  );
};

export default Tarifs;
