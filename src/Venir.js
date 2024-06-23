import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import config from "./config/config"; // Chemin vers votre fichier config.js

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

const center = {
  lat: 45.271453,
  lng: -0.395978,
};

const markerPosition = {
  lat: 45.271846,
  lng: -0.398084,
};

const Venir = () => {
  console.log();
  return (
    <div className="venir_container">
      <div className="venir_title title mobile_page_title">Comment venir</div>
      <div className="venir_infos">
        <div className="venir_carte">
          <LoadScript googleMapsApiKey={config.mapsAPIkey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={markerPosition} />
            </GoogleMap>
          </LoadScript>
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
        </div>
      </div>
    </div>
  );
};

export default Venir;
