import React from "react";
import chap_pic from "./images/chap.png";
import exte_pic from "./images/exte.png";
import mus_pic from "./images/musique.png";
import { Link } from "react-router-dom";

const ProgramListV = () => {
  // Données des éléments
  const elements = [
    {
      id: 1,
      scene: "chap",
      heure: "17H00",
      titre: "MOI ET MA BOUCHE",
      lien: "",
    },
    {
      id: 2,
      scene: "exte",
      heure: "18H30",
      titre: "ÇA VA FOIRER",
      lien: "Paramètre 4",
    },
    {
      id: 3,
      scene: "musique",
      heure: "20H00",
      titre: "LÉFÉSONOR",
      lien: "Paramètre 4",
    },
    {
      id: 4,
      scene: "chap",
      heure: "21H30",
      titre: "L’OISEAU VERT",
      lien: "Paramètre 4",
    },
    {
      id: 5,
      scene: "musique",
      heure: "23H15",
      titre: "IZOÏ",
      lien: "Paramètre 4",
    },
    {
      id: 6,
      scene: "musique",
      heure: "00H30",
      titre: "DJ MOULE VS DJ POULOU",
      lien: "Paramètre 4",
    },

    // ... Ajoutez plus d'éléments avec leurs paramètres
  ];

  // Fonction pour obtenir l'image correspondante en fonction de scene
  const getImage = (scene) => {
    if (scene === "exte") {
      return exte_pic;
    } else if (scene === "chap") {
      return chap_pic;
    } else if (scene === "musique") {
      return mus_pic;
    } else {
      return null; // Image par défaut si la valeur de scene ne correspond à aucune image
    }
  };

  return (
    <div className="progra_list">
      {elements.map((element) => (
        <div className="item">
          <img
            src={getImage(element.scene)}
            alt={element.scene}
            className="small_scene"
          />
          <span className="heure">{element.heure}</span>
          <Link
            to={`/spectacle/V/${element.id}`}
            state={{ id: element.id, type: "V" }}
            className="titre"
          >
            {element.titre}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProgramListV;