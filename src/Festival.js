import festival_pic from "./images/festival_pic.png";
import festival_pic_1 from "./images/festival_pic_1.jpg";
import festival_pic_2 from "./images/festival_pic_2.jpg";
import festival_pic_3 from "./images/festival_pic_3.jpg";
import logoW from "./images/logo_W.png";

const Festival = () => {
  return (
    <div className="festival_container">
      <div className="festival_container_1">
        <div id="text" className="festival_text">
          <div className="title">Le festival</div>
          <div className="text_W">
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
          </div>
        </div>

        <div id="festival_pic" className="festival_container_picture">
          <img src={festival_pic} className="festival_picture" alt="" />
        </div>
      </div>
      <div className="festival_container_2">
        <div className="festival_column">
          <img src={festival_pic_1} className="temp_pic" alt="" />
          <div className="festival_title2_container">
            <div className="title2">Parler de théâtre dans un milieu rural</div>
          </div>
          <div className="festival_container_textB">
            <div className="text_B">
              Pour cette dix-septième édition, nous investirons à nouveau le
              site du lac de Montendre. Nous proposerons des spectacles de
              théâtre sous toutes ses formes et de musique à un public n’ayant
              que peu accès au ce type d’activités culturelles le reste de
              l’année.
            </div>
          </div>
        </div>
        <div className="festival_column">
          <img src={festival_pic_2} className="temp_pic" alt="" />
          <div className="festival_title2_container">
            <div className="title2">
              Présenter des spectacles de grande qualité à un large public
            </div>
          </div>
          <div className="festival_container_textB">
            <div className="text_B">
              Lors du festival, la scène est partagée entre jeunes amateurs et
              professionnels. Les spectacles amateurs ne sont pas médiocres pour
              autant. Nous privilégions la venue de troupes proposant des pièces
              de grande qualité et jouissant d’une mise en scène et d’un jeu de
              comédiens souvent dignes de spectacles professionnels.
            </div>
          </div>
        </div>
        <div className="festival_column">
          <img src={festival_pic_3} className="temp_pic" alt="" />
          <div className="festival_title2_container">
            <span className="title2">Créer un lieu d’échange</span>
          </div>
          <div className="festival_container_textB">
            <div className="text_B">
              A l’issue des représentations, des séances de discussion et de
              débat entre les artistes et leur public sont organisées dans une
              tente berbère installée sur le site du festival.
            </div>
          </div>
        </div>
      </div>
      <div className="festival_container_3">
        <div className="festival_row">
          <div className="festival_textbox">
            <div className="title3">Territoire</div>
            <div className="text_small_W">
              Dans l’idée de favoriser l’emploi et l’économie, nous nous
              entourons de fournisseurs locaux, concernés par notre démarche
              écologique. Cela permet de réduire l’émission de gaz à effet de
              serre lors des déplacements et transports du matériel. Cet acte
              contribue à stimuler le tissu local et favorise notre implantation
              en terre montendraise.
            </div>
          </div>
        </div>
        <div className="festival_row2">
          <div className="festival_sub_column">
            <div className="festival_sub_row">
              <div>
                <div className="title3">Communication</div>
                <div className="text_small_W">
                  Nous renforçons notre présence sur Internet grâce à notre site
                  et aux réseaux sociaux. Nous pouvons ainsi réduire les
                  quantités d’impression pour l’affichage, tout en s’assurant
                  d’une diffusion large de l’événement.
                </div>
              </div>
            </div>
            <div className="festival_sub_row">
              <div className="title3">Décors</div>
              <div className="text_small_W">
                Enfin, la décoration du festival est réalisée à partir de
                matériaux de récupération. Une grande partie du matériel
                technique est mis à disposition par les collectivités et les
                partenaires afin de privilégier la mise en commun.
              </div>
            </div>
          </div>
          <div className="festival_sub_column">
            <img src={logoW} className="logoW" alt="" />
          </div>
          <div className="festival_sub_column">
            <div className="festival_sub_row">
              <div className="title3">Tri des déchets</div>
              <div className="text_small_W">
                Pour cette quinzième édition, nous voulons mettre l’accent sur
                le tri des déchets et allons mettre en place des poubelles à
                deux bacs avec des panneaux explicatifs. D’autre part, nous
                voulons limiter au maximum le gaspillage, ainsi toute la
                vaisselle de notre espace bénévole est réutilisable et nos
                déchets alimentaires sont compostés !
              </div>
            </div>
            <div className="festival_sub_row">
              <div className="title3">Toilettes sèches</div>
              <div className="text_small_W">
                Notre équipe tient à disposition, des toilettes sèches, symboles
                de notre engagement pour le respect de l’environnement. Un texte
                descriptif invite le public à prendre soin de ce lieu, ce qui
                constitue une démarche de sensibilisation.
              </div>
            </div>
          </div>
        </div>
        <div className="festival_row">
          <div className="festival_textbox">
            <div className="title3"> Verres réutilisables</div>
            <div className="text_small_W">
              À maintes reprises, nous avons souhaité que les boissons soient
              servies dans des verres consignés. Il y a six ans, nous avons mis
              en service 1000 verres réutilisables. Ils ont de nouveau servi
              pour les éditions suivantes, et nous n’en commandons que peu de
              nouveaux chaque année.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Festival;
