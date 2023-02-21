import festival_pic from "./images/festival_pic.png";

const Festival = () => {
  return (
    <div className="festival_container">
      <div id="text" className="festival_text">
        <span className="text">
          Drôle de Mômes, c’est une organisation associative et bénévole :
          depuis plus de dix-sept ans, Drôles de Mômes est géré, organisé,
          façonné par une équipe de plusieurs dizaines de bénévoles de 5 à 80
          ans qui partage ensemble l'envie de créer ce beau festival.
          <br />
          <br />
          Le festival est né de la volonté d’une jeune troupe de théâtre, les
          Piccolos, de faire partager divers arts vivants dans un milieu rural.
          La première édition a eu lieu en 2005 dans une grange … Les suivantes
          se sont déroulées au stade de la Taulette, puis au château de
          Montendre. Le festival a finalement posé ses bagages sur la rive du
          Lac Baron Desqueyroux pour avoir un cadre agréable et ombragé, entre
          l’eau et les pins.
          <br />
          <br />
          Voici les particularités qui font de « Drôles de mômes » un des seuls
          festivals de son genre en région Nouvelle Aquitaine.
        </span>
      </div>

      <div id="festival_pic" className="festival_picture">
        <img src={festival_pic} alt="" />
      </div>
    </div>
  );
};

export default Festival;
