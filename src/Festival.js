import festival_pic from "./images/festival_pic.png";
import festival_pic_1 from "./images/festival_pic_1.jpg";
import festival_pic_2 from "./images/festival_pic_2.jpg";
import festival_pic_3 from "./images/festival_pic_3.jpg";

const Festival = () => {
  return (
    <div className="festival_container">
      <div className="festival_container_1">
        <div id="text" className="festival_text">
          <span className="title">Le festival</span>
          <span className="text_W">
            Drôle de Mômes, c’est une organisation associative et bénévole :
            depuis plus de dix-sept ans, Drôles de Mômes est géré, organisé,
            façonné par une équipe de plusieurs dizaines de bénévoles de 5 à 80
            ans qui partage ensemble l'envie de créer ce beau festival.
            <br />
            <br />
            Le festival est né de la volonté d’une jeune troupe de théâtre, les
            Piccolos, de faire partager divers arts vivants dans un milieu
            rural. La première édition a eu lieu en 2005 dans une grange … Les
            suivantes se sont déroulées au stade de la Taulette, puis au château
            de Montendre. Le festival a finalement posé ses bagages sur la rive
            du Lac Baron Desqueyroux pour avoir un cadre agréable et ombragé,
            entre l’eau et les pins.
            <br />
            <br />
            Voici les particularités qui font de « Drôles de mômes » un des
            seuls festivals de son genre en région Nouvelle Aquitaine.
          </span>
        </div>

        <div id="festival_pic" className="festival_picture">
          <img src={festival_pic} alt="" />
        </div>
      </div>
      <div className="festival_container_2">
        <div className="festival_column">
          <img src={festival_pic_1} className="temp_pic" alt="" />
          <div className="festival_title2_container">
            <span className="title2">
              Parler de théâtre dans un milieu rural
            </span>
          </div>
          <div className="festival_container_textB">
            <span className="text_B">
              Pour cette dix-septième édition, nous investirons à nouveau le
              site du lac de Montendre. Nous proposerons des spectacles de
              théâtre sous toutes ses formes et de musique à un public n’ayant
              que peu accès au ce type d’activités culturelles le reste de
              l’année.
            </span>
          </div>
        </div>
        <div className="festival_column">
          <img src={festival_pic_2} className="temp_pic" alt="" />
          <div className="festival_title2_container">
            <span className="title2">
              Présenter des spectacles de grande qualité à un large public
            </span>
          </div>
          <div className="festival_container_textB">
            <span className="text_B">
              Lors du festival, la scène est partagée entre jeunes amateurs et
              professionnels. Les spectacles amateurs ne sont pas médiocres pour
              autant. Nous privilégions la venue de troupes proposant des pièces
              de grande qualité et jouissant d’une mise en scène et d’un jeu de
              comédiens souvent dignes de spectacles professionnels.
            </span>
          </div>
        </div>
        <div className="festival_column">
          <img src={festival_pic_3} className="temp_pic" alt="" />
          <div className="festival_title2_container">
            <span className="title2">Créer un lieu d’échange</span>
          </div>
          <div className="festival_container_textB">
            <span className="text_B">
              A l’issue des représentations, des séances de discussion et de
              débat entre les artistes et leur public sont organisées dans une
              tente berbère installée sur le site du festival.
            </span>
          </div>
        </div>
      </div>
      <div className="festival_container_3">
        <div className="festival_row">
          <span>Territoire</span>
        </div>
        <div className="festival_row">
          <div className="festival_sub_column">
            <div className="festival_sub_row">
              <span>Communication</span>
            </div>
            <div className="festival_sub_row">
              <span>Décors</span>
            </div>
          </div>
          <div className="festival_sub_column"></div>
          <div className="festival_sub_column">
            <div className="festival_sub_row">
              <span>Tri des déchets</span>
            </div>
            <div className="festival_sub_row">
              <span>Toilettes sèches</span>
            </div>
          </div>
        </div>
        <div className="festival_row">
          <span>Verres réutilisables</span>
        </div>
      </div>
    </div>
  );
};

export default Festival;
