import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Spectacle = () => {
  const location = useLocation();
  const { id, type } = location.state;
  const [data, setData] = useState(null);
  const dynamicPath = "/spectacles/" + type + "/" + id + ".json";
  const [imageSrc, setImageSrc] = useState("");
  const [legScene, setLegScene] = useState("");

  useEffect(() => {
    // Charger les données à partir du fichier JSON correspondant à l'ID et au type
    fetch(dynamicPath)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data && data.scene);
        console.log(data && data.titre);

        const newImageSrc = `/images/spectacles/${type}/${id}.jpg`;
        const newLegScene = `/images/scenes/${data && data.scene}.png`;
        setImageSrc(newImageSrc);
        setLegScene(newLegScene);
      })
      .catch((error) => console.error(error));
  }, [id, type]);

  return (
    <div className="spec_container">
      <div className="spec_pic_container">
        <img
          src={imageSrc}
          alt="Surement pas un .JPG /!\\"
          className="spec_pic"
        />
      </div>
      <div className="spec_infos">
        <div className="spec_datas">
          <div className="spec_titre">
            {data && data.titre}{" "}
            <img
              src={legScene}
              alt="Pas une bonne scène (ou pas un png)"
              className="medium_scene"
            />
          </div>
          <div className="spec_cie">{data && data.cie}</div>
          <div className="spec_det">{data && data.set}</div>
        </div>
        <div className="spec_resume">{data && data.resume}</div>
      </div>
    </div>
  );
};

export default Spectacle;
