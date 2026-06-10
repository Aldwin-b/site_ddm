import { BENEVOLES_TEXTS } from "./BenevolesData";
import { useIsMobile } from "../hooks/useIsMobile"; // Import du hook centralisé
import "./Benevoles.css";

import pic1 from "../images/lesbénévoles1.jpg";
import pic2 from "../images/lesbénévoles2.jpg";
import pic3 from "../images/lesbénévoles3.jpg";
import pic4 from "../images/lesbénévoles4.jpg";
import pic5 from "../images/lesbénévoles5.jpg";
import pic6 from "../images/lesbénévoles6.jpg";

const BENE_PICS = [pic1, pic2, pic3, pic4, pic5, pic6];

const Benevoles = () => {
  const isMobile = useIsMobile(); // Vrai si l'écran < 800px

  const presentationText = isMobile
    ? BENEVOLES_TEXTS.presentationMobile
    : BENEVOLES_TEXTS.presentationDesktop;

  return (
    /* On ajoute une classe dynamique basée sur le JS */
    <main
      className={`benevoles_container ${isMobile ? "is-mobile" : "is-desktop"}`}
    >
      <div className="benevole_title">
        <h1 className={isMobile ? "mobile_page_title" : "title"}>
          Les bénévoles
        </h1>
      </div>

      <section className="benevoles_column2">
        {BENE_PICS.map((pic, index) => (
          <img
            key={index}
            src={pic}
            className="pic_bene"
            alt={`Équipe bénévoles ${index + 1}`}
          />
        ))}
      </section>

      <section className="benevoles_column1">
        <div className="benevole_text">
          <p className="text_W">{presentationText}</p>
          <p className="text_W">{BENEVOLES_TEXTS.equipe}</p>
          <p className="text_W">{BENEVOLES_TEXTS.missions}</p>
        </div>
      </section>
    </main>
  );
};

export default Benevoles;
