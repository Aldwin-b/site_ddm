//import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
//import config from "./config/config"; // Chemin vers votre fichier config.js

const screenWidth = window.innerWidth;
let containerStyle = {
  width: "100%",
  height: "50vh",
};

if (screenWidth >= 800) {
  containerStyle = {
    ...containerStyle,
    width: "100%",
    height: "50vh",
  };
} else {
  containerStyle = {
    ...containerStyle,
    width: "100%",
    height: "40vh",
  };
}
/*
const center = {
  lat: 45.271453,
  lng: -0.395978,
};

const markerPosition = {
  lat: 45.271846,
  lng: -0.398084,
};
*/
const Venir = () => {
  console.log();
  return (
    <div className="venir_container">
      <div className="venir_title title mobile_page_title">Comment venir</div>
      <div className="venir_infos">
        <div className="venir_carte">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d306.7224946019668!2d-0.39822888112799815!3d45.27166116760003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480039f1682c34e7%3A0xefb0ca49946030b8!2sFestival%20Dr%C3%B4les%20de%20M%C3%B4mes!5e0!3m2!1sfr!2sfr!4v1719245438444!5m2!1sfr!2sfr"
            allowfullscreen=""
            style={containerStyle}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Carte du festival Drôles de Mômes"
          ></iframe>
        </div>
        <div className="venir_texts">
          <div className="text_W venir_subtitle">
            En train
            <span className="text_W">
              <span> </span>: Arrêt gare de Montendre, puis 1,4 km à pied (19
              minutes) pour rejoindre le festival.
            </span>
          </div>
          <div className="text_W venir_subtitle">
            En voiture
            <span className="text_W">
              <span> </span>: Par l’A10 prendre la sortie 38 Montendre / Saint
              Ciers-sur-Gironde. Par la N10, prendre la sortie D730 Montendre /
              Montlieu-la-Garde.
            </span>
          </div>
          <div className="text_W venir_subtitle">
            De Montendre
            <span className="text_W">
              <span> </span>: Prendre la direction du Lac. L’accès se fait par
              l’avenue de Onda.
            </span>
          </div>
          <div className="text_W venir_subtitle">
            Dormir sur place
            <span className="text_W">
              <span> </span>: Camping Domaine du Lac à Montendre
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venir;
