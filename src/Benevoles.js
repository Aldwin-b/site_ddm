import pic from "./images/festival_pic_1.jpg";

const Benevoles = () => {
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
            Certain.es sont là depuis le début, d’autres nous ont rejoint.es au
            fil des années pour apporter de nouvelles idées… En tout ce sont une
            quarantaine de personnes de 7 à 77 ans qui s’activent lors d’un
            week-end, mais aussi tout au long de l’année pour vous concocter un
            festival aux petits oignons ! <br />
          </span>

          <span className="text_W">
            <br />
            Leurs missions : imaginer, rêver, programmer, réserver, planifier,
            fabriquer, écrire, discuter, construire, décorer, peindre, cuisiner,
            ranger, nettoyer, guider, informer, porter, brasser, découper,
            assembler, réparer, accrocher, répéter…
          </span>
        </div>
      </div>
      <div className="benevoles_column2">
        <img src={pic} className="pic_bene" alt="" />
        <img src={pic} className="pic_bene" alt="" />
        <img src={pic} className="pic_bene" alt="" />
        <img src={pic} className="pic_bene" alt="" />
        <img src={pic} className="pic_bene" alt="" />
        <img src={pic} className="pic_bene" alt="" />
      </div>
    </div>
  );
};

export default Benevoles;
