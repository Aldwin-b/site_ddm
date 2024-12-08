import pic1 from "./images/partenaire1.png";
import pic2 from "./images/partenaire2.png";
import pic3 from "./images/partenaire3.png";
import pic4 from "./images/partenaire4.png";
import pic5 from "./images/partenaire5.png";

const Partenaires = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 800) {
    return (
      <div className="partenaires_container">
        <div className="partenaires_title title">Les partenaires 2024</div>
        <div className="partenaires_logos">
          <a
            href="https://www.nouvelle-aquitaine.fr"
            target="_blank"
            rel="noreferrer"
          >
            <img src={pic1} className="pic_part" alt="" />
          </a>
          <a
            href="https://la.charente-maritime.fr"
            target="_blank"
            rel="noreferrer"
          >
            <img src={pic2} className="pic_part" alt="" />{" "}
          </a>
          <a
            href="https://www.hautesaintonge.fr"
            target="_blank"
            rel="noreferrer"
          >
            <img src={pic3} className="pic_part" alt="" />{" "}
          </a>
          <a
            href="https://www.ville-montendre.fr"
            target="_blank"
            rel="noreferrer"
          >
            <img src={pic4} className="pic_part" alt="" />{" "}
          </a>
          <a href="https://oara.fr" target="_blank" rel="noreferrer">
            <img src={pic5} className="pic_part" alt="" />{" "}
          </a>
        </div>
        <div className="partenaires_title title">Les sponsors 2024</div>
        <div className="partenaires_sponsors text_W">
          <div className="partenaires_column">
            <text> Cabinet Lalande et associés (Montendre)</text>
            <text> Albert (Montendre)</text>
            <text> Esprit de Famille Doussain (Montendre)</text>
            <text> Beecoming (Chevanceaux)</text>
            <text> Laboprodent'r / Jérôme Rogron (Montendre)</text>
          </div>
          <div className="partenaires_column">
            <text> Mutuelle de Poitiers (Montendre)</text>
            <text> GDP (Montendre)</text>
            <text> Chaiu vous (Montendre)</text>
            <text> Café de Paris (Montendre)</text>
            <text> Crédit Mutuel (Montendre)</text>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="partenaires_container"></div>;
  }
};

export default Partenaires;
