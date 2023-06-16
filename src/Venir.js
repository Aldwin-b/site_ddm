import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 45.271453,
  lng: -0.395978,
};

const markerPosition = {
  lat: 45.271846,
  lng: -0.398084,
};

const Venir = () => {
  return (
    <div className="venir_container">
      <div className="venir_title title">Comment venir</div>
      <div className="venir_infos">
        <div className="venir_carte">
          <LoadScript googleMapsApiKey="AIzaSyBwC85ta2JloE2YQQ6K5rYH3LQDPFJwYaU">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={17}
            >
              <Marker position={markerPosition} />
            </GoogleMap>
          </LoadScript>
        </div>
        <div className="venir_texts">
          <div className="venir_subtitle">
            En voiture
            <span className="venir_text">
              <span> </span>: Par l’A10 prendre la sortie 38 Montendre/St
              Ciers-sur-Gironde Par la N10, prendre la sortie D730
              Montendre/Montlieu-la-Garde
            </span>
          </div>
          <div className="venir_subtitle">
            De Montendre
            <span className="venir_text">
              <span> </span>: Prendre la direction du Lac. L’accès se fait par
              l’avenue de Onda
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venir;
