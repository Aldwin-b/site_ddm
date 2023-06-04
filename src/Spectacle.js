import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Spectacle = () => {
  const location = useLocation();
  const { id, type } = location.state;
  const [data, setData] = useState(null);
  console.log("ID:", id);
  console.log("Type:", type);

  useEffect(() => {
    // Charger les données à partir du fichier JSON correspondant à l'ID et au type
    fetch(`/spectacles/${type}/${id}.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log("ID:", id);
        console.log("Type:", type);
        console.log("Data:", data);
        setData(data);
      })
      .catch((error) => console.error(error));
  }, [id, type]);

  return (
    <div className="spec_container">
      <div className="spec_pic">
        <img src={`./images/spectacles/${id}.jpg`} alt="jgduyijfkgagjij" />
      </div>
      <div className="spec_infos">
        <div className="spec_titre">{data && data.titre}</div>
        <div className="spec_cie">{data && data.cie}</div>
        <div className="spec_det">{data && data.set}</div>
        <div className="spec_resume">{data && data.resume}</div>
      </div>
    </div>
  );
};

export default Spectacle;
