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
      heure: "11H00",
      titre: "LA GROSSE FAIM DE P’TIT BONHOMME",
      lien: "",
    },
    {
      id: 2,
      scene: "exte",
      heure: "14H00",
      titre: "WET SIDE STORY",
      lien: "Paramètre 4",
    },
    {
      id: 3,
      scene: "exte",
      heure: "15h30",
      titre: "LE MAGNIFIQUE BON À RIEN",
      lien: "Paramètre 4",
    },
    {
      id: 4,
      scene: "chap",
      heure: "17H00",
      titre: "LA MOTIVATION",
      lien: "Paramètre 4",
    },
    {
      id: 5,
      scene: "exte",
      heure: "19H00",
      titre:
        "L’HISTOIRE DES TROIS MOUSQUETAIRES RACONTÉE À DEUX ET EN UNE DEMI-HEURE",
      lien: "Paramètre 4",
    },
    {
      id: 6,
      scene: "musique",
      heure: "20H00",
      titre: "76SIXTERS",
      lien: "Paramètre 4",
    },
    {
      id: 7,
      scene: "musique",
      heure: "20H30",
      titre: "SACHA IVY",
      lien: "Paramètre 4",
    },
    {
      id: 8,
      scene: "chap",
      heure: "21H30",
      titre: "CARTABLE",
      lien: "Paramètre 4",
    },
    {
      id: 9,
      scene: "musique",
      heure: "22h45",
      titre: "THE OVERSLEEP",
      lien: "Paramètre 4",
    },
    {
      id: 10,
      scene: "musique",
      heure: "00H00",
      titre: "LÉFÉSONOR",
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
            to={`/spectacle/S/${element.id}`}
            state={{ id: element.id, type: "S" }}
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