import map from "./images/map.png";

const Venir = () => {
  return (
    <div className="venir_container">
      <div className="venir_title title">Comment venir </div>
      <div className="venir_infos">
        <div className="venir_carte">
          <img src={map} className="map" alt="carte" />
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
