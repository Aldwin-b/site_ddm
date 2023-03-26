import "./site_styles.css";
import pic from "./images/festival_pic_1.jpg";
import Carousel from "./Carousel";
const Edition2022 = () => {
  return (
    <div className="edition_container">
      <div className="edition_title">Retour en images sur l'édition 2022</div>
      <div className="edition_text">
        Les Combinés Nordiques du Pacifiques (équipe rouge) affrontaient les
        Canarikiski (équipe jaune)
      </div>
      <div className="edition_photos">
        <Carousel />
      </div>
    </div>
  );
};

export default Edition2022;
