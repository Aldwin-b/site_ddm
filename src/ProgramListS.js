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
      heure: "10H30",
      titre: "Ami·e·s des toiles",
      lien: "",
    },
    {
      id: 2,
      scene: "chap",
      heure: "11H30",
      titre: "Babborco, l’ogre roi",
      lien: "",
    },
    {
      id: 3,
      scene: "exte",
      heure: "14H00",
      titre: "Pig Boy",
      lien: "Paramètre 4",
    },
    {
      id: 4,
      scene: "chap",
      heure: "15H30",
      titre: "Building",
      lien: "Paramètre 4",
    },
    {
      id: 5,
      scene: "exte",
      heure: "17H30",
      titre: "Madame C",
      lien: "Paramètre 4",
    },
    {
      id: 6,
      scene: "exte",
      heure: "19H00",
      titre: "Le Futur est génial",
      lien: "Paramètre 4",
    },
    {
      id: 7,
      scene: "musique",
      heure: "20H15",
      titre: "S.O.W.A.T.",
      lien: "Paramètre 4",
    },
    {
      id: 8,
      scene: "chap",
      heure: "21H30",
      titre: "Roméo et Juliette avec distance ",
      lien: "Paramètre 4",
    },
    {
      id: 9,
      scene: "musique",
      heure: "22H45",
      titre: "Moloch monolyth",
      lien: "Paramètre 4",
    },
    {
      id: 10,
      scene: "musique",
      heure: "00H00",
      titre: "Baron",
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
          <div>
            <img
              src={getImage(element.scene)}
              alt={element.scene}
              className="small_scene"
            />
          </div>
          <div>
            <span className="heure">{element.heure}</span>
          </div>
          <div>
            <Link
              to={`/spectacle/S/${element.id}`}
              state={{ id: element.id, type: "S" }}
              className="titre"
            >
              {element.titre}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgramListV;
