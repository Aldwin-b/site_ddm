import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Spectacle = () => {
  //const location = useLocation();
  const { type, id } = useParams();
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
        const newImageSrc = `/images/spectacles/${type}/${id}.jpg`;
        const newLegScene = `/images/scenes/${data && data.scene}.png`;
        setImageSrc(newImageSrc);
        setLegScene(newLegScene);
      })
      .catch((error) => console.error(error));
  }, [id, type, dynamicPath]);

  if (!id || !type) {
    return <div>Invalid Spectacle Data</div>;
  }

  return (
    <div className="spec_container">
      <div className="spec_pic_container">
        <img src={imageSrc} alt=" " className="spec_pic" />
      </div>
      <div className="spec_infos">
        <div className="spec_datas">
          <div className="spec_titre">
            {data && data.titre}{" "}
            <img src={legScene} alt=" " className="medium_scene" />
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
