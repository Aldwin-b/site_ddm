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
      heure: "10H00",
      titre: "La couleur des émotions",
      lien: "",
    },
    {
      id: 2,
      scene: "chap",
      heure: "11H00",
      titre: "Maman Chaperon",
      lien: "",
    },
    {
      id: 3,
      scene: "chap",
      heure: "14H00",
      titre: "Le tour du monde en 40 jours",
      lien: "Paramètre 4",
    },
    {
      id: 4,
      scene: "chap",
      heure: "15H30",
      titre: "Le dragon",
      lien: "Paramètre 4",
    },
    {
      id: 5,
      scene: "chap",
      heure: "17H30",
      titre: "PMU à midi ?",
      lien: "Paramètre 4",
    },
    {
      id: 6,
      scene: "exte",
      heure: "19H00",
      titre: "En attendant le 3ème type",
      lien: "Paramètre 4",
    },
    {
      id: 7,
      scene: "musique",
      heure: "20H15",
      titre: "Blind Test avec Pulp Addiction",
      lien: "Paramètre 4",
    },
    {
      id: 8,
      scene: "chap",
      heure: "21H30",
      titre: "Madame, Monsieur, Bonsoir",
      lien: "Paramètre 4",
    },
    {
      id: 9,
      scene: "musique",
      heure: "22h45",
      titre: "NO SAIL",
      lien: "Paramètre 4",
    },
    {
      id: 10,
      scene: "musique",
      heure: "00H00",
      titre: "DJ POULOU",
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
