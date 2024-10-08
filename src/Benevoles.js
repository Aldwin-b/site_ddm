import pic1 from "./images/lesbénévoles1.jpg";
import pic2 from "./images/lesbénévoles2.jpg";
import pic3 from "./images/lesbénévoles3.jpg";
import pic4 from "./images/lesbénévoles4.jpg";
import pic5 from "./images/lesbénévoles5.jpg";
import pic6 from "./images/lesbénévoles6.jpg";

const Benevoles = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 800) {
    return (
      <div className="benevoles_container">
        <div className="benevoles_column1">
          <div className="benevole_title">
            <span className="title">Les bénévoles</span>
          </div>
          <div className="benevole_text">
            <span className="text_W">
              <br />
              Drôles de Mômes c’est aussi et avant tout une grande famille de
              bénévoles qui fait vivre et évoluer le festival depuis bientôt 16
              ans !
              <br />
            </span>
            <span className="text_W">
              <br />
              Certain.es sont là depuis le début, d’autres nous ont rejoint.es
              au fil des années pour apporter de nouvelles idées… En tout ce
              sont une quarantaine de personnes de 7 à 77 ans qui s’activent
              lors d’un week-end, mais aussi tout au long de l’année pour vous
              concocter un festival aux petits oignons ! <br />
            </span>

            <span className="text_W">
              <br />
              Leurs missions : imaginer, rêver, programmer, réserver, planifier,
              fabriquer, écrire, discuter, construire, décorer, peindre,
              cuisiner, ranger, nettoyer, guider, informer, porter, brasser,
              découper, assembler, réparer, accrocher, répéter…
            </span>
          </div>
        </div>
        <div className="benevoles_column2">
          <img src={pic1} className="pic_bene" alt="" />
          <img src={pic2} className="pic_bene" alt="" />
          <img src={pic3} className="pic_bene" alt="" />
          <img src={pic4} className="pic_bene" alt="" />
          <img src={pic5} className="pic_bene" alt="" />
          <img src={pic6} className="pic_bene" alt="" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="benevoles_container">
        <div className="benevole_title">
          <span className="mobile_page_title">Les bénévoles</span>
        </div>
        <div className="benevoles_pictures">
          <img src={pic1} className="pic_bene" alt="" />
          <img src={pic2} className="pic_bene" alt="" />
          <img src={pic3} className="pic_bene" alt="" />
          <img src={pic4} className="pic_bene" alt="" />
          <img src={pic5} className="pic_bene" alt="" />
          <img src={pic6} className="pic_bene" alt="" />
        </div>
        <div className="benevoles_column1">
          <div className="benevole_text">
            <span className="text_W">
              <br />
              Drôles de Mômes c’est aussi et avant tout une grande famille de
              bénévoles qui fait vivre et évoluer le festival.
              <br />
              <br />
            </span>
            <span className="text_W">
              Certain⸱es sont là depuis le début, d’autres nous ont rejoint.es
              au fil des années pour apporter de nouvelles idées… En tout ce
              sont une quarantaine de personnes de 7 à 77 ans qui s’activent
              lors d’un week-end, mais aussi tout au long de l’année pour vous
              concocter un festival aux petits oignons ! <br />
            </span>

            <span className="text_W">
              <br />
              Leurs missions : imaginer, rêver, programmer, réserver, planifier,
              fabriquer, écrire, discuter, construire, décorer, peindre,
              cuisiner, ranger, nettoyer, guider, informer, porter, brasser,
              découper, assembler, réparer, accrocher, répéter…
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default Benevoles;
