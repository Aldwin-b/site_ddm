// festivalData.jsx
import festival_pic_2 from "../images/lefestival2.jpg";
import festival_pic_3 from "../images/lefestival3.jpg";
import festival_pic_4 from "../images/lefestival4.jpg";
import festival_pic_5 from "../images/lefestival5.jpg";
import festival_pic_6 from "../images/lefestival6.jpg";
import festival_pic_7 from "../images/lefestival7.jpg";

export const TEXTS = {
  presentation: (
    <>
      Drôle de Mômes, c’est une organisation associative et bénévole : depuis
      plus de dix-sept ans, Drôles de Mômes est géré, organisé, façonné par une
      équipe de plusieurs dizaines de bénévoles de 5 à 80 ans qui partage
      ensemble l'envie de créer ce beau festival.
      <br />
      <br />
      Le festival est né de la volonté d’une jeune troupe de théâtre, les
      Piccolos, de faire partager divers arts vivants dans un milieu rural. La
      première édition a eu lieu en 2005 dans une grange … Les suivantes se sont
      déroulées au stade de la Taulette, puis au château de Montendre. Le
      festival a finalement posé ses bagages sur la rive du Lac Baron
      Desqueyroux pour avoir un cadre agréable et ombragé, entre l’eau et les
      pins.
      <br />
      <br />
      Voici les particularités qui font de « Drôles de mômes » un des seuls
      festivals de son genre en région Nouvelle Aquitaine.
    </>
  ),
  territoire:
    "Dans l’idée de favoriser l’emploi et l’économie, nous nous entourons de fournisseurs locaux, concernés par notre démarche écologique. Cela permet de réduire l’émission de gaz à effet de serre lors des déplacements et transports du matériel. Cet acte contribue à stimuler le tissu local et favorise notre implantation en terre montendraise.",
  communication:
    "Nous renforçons notre présence sur Internet grâce à notre site et aux réseaux sociaux. Nous pouvons ainsi réduire les quantités d’impression pour l’affichage, tout en s’assurant d’une diffusion large de l’événement.",
  dechets:
    "Pour cette quinzième édition, nous voulons mettre l’accent sur le tri des déchets et allons mettre en place des poubelles à deux bacs avec des panneaux explicatifs. D’autre part, nous voulons limiter au maximum le gaspillage, ainsi toute la vaisselle de notre espace bénévole est réutilisable et nos déchets alimentaires sont compostés !",
  decors:
    "Enfin, la décoration du festival est réalisée à partir de matériaux de récupération. Une grande partie du matériel technique est mis à disposition par les collectivités et les partenaires afin de privilégier la mise en commun.",
  toilettes:
    "Notre équipe tient à disposition, des toilettes sèches, symboles de notre engagement pour le respect de l’environnement. Un texte descriptif invite le public à prendre soin de ce lieu, ce qui constitue une démarche de sensibilisation.",
  verres:
    "À maintes reprises, nous avons souhaité que les boissons soient servies dans des verres consignés. Il y a six ans, nous avons mis en service 1000 verres réutilisables. Ils ont de nouveau servi pour les éditions suivantes, et nous n’en commandons que peu de nouveaux chaque année.",
  ecoText: (
    <>
      Depuis plusieurs années, nous abordons le festival selon la démarche
      suivante :
      <ul>
        <li>
          constituer une organisation qui vise à économiser les ressources
          naturelles
        </li>
        <li>réduire l’empreinte écologique pour préserver l’environnement</li>
        <li>sensibiliser le public avec une démarche éco-responsable.</li>
      </ul>
      Nous mettons ainsi en place, plusieurs actions qui marquent notre volonté
      d’inscrire le festival dans une logique durable.
    </>
  ),
};

export const FEATURES_BLOCK_1 = [
  {
    id: "rural",
    pic: festival_pic_2,
    title: "Parler de théâtre dans un milieu rural",
    text: "Pour cette dix-septième édition, nous investirons à nouveau le site du lac de Montendre. Nous proposerons des spectacles de théâtre sous toutes ses formes et de musique à un public n’ayant que peu accès au ce type d’activités culturelles le reste de l’année.",
  },
  {
    id: "qualite",
    pic: festival_pic_3,
    title: "Présenter des spectacles de grande qualité à un large public",
    text: "Lors du festival, la scène est partagée entre jeunes amateurs et professionnels. Les spectacles amateurs ne sont pas médiocres pour autant. Nous privilégions la venue de troupes proposant des pièces de grande qualité et jouissant d’une mise en scène et d’un jeu de comédiens souvent dignes de spectacles professionnels.",
  },
  {
    id: "echange",
    pic: festival_pic_4,
    title: "Créer un lieu d’échange",
    text: "A l’issue des représentations, des séances de discussion et de débat entre les artistes et leur public sont organisées dans une tente berbère installée sur le site du festival.",
  },
];

export const FEATURES_BLOCK_2 = [
  {
    id: "enfants",
    pic: festival_pic_5,
    title:
      "Un festival aussi consacré aux troupes d’enfants et jeunes amateurs",
    text: "Notre volonté est de permettre à l’enfant d’être le maître de cérémonie, de créer un espace de rencontre et d’expression au travers du spectacle vivant. Dans un désir de pédagogie, nous voulons que les jeunes découvrent ce qu’est l’art théâtral dans sa globalité et qu’ils deviennent les garants de la culture de demain. La place est largement laissée à l’enfant, c’est lui qui aménagement et anime le lieu, il est actor, spectateur et organisateur. Ainsi, depuis la création du festival, les jeunes organisateurs ont eu l’occasion d’apprendre ce qu’engendre la mise en place d’une telle aventure : se rencontrer, organiser un travail d’équipe, définir des objectifs, gérer un groupe et promouvoir son spectacle. Les troupes originaires de notre association sont bien sûr représentées mais nous invitons de nombreuses autres compagnies extérieures dont la provenance s’étend sur toute la France.",
  },
  {
    id: "public",
    pic: festival_pic_6,
    title: "Un événement qui s’adresse à toute sorte de public",
    text: "Nous ne souhaitons pas seulement viser le jeune public mais tous ceux qui aiment le théâtre sous toutes ses formes, ainsi que tous ceux qui sont prêts à le découvrir. Les spectacles proposés ciblent des spectateurs de tous âges. Le public du festival est très hétérogène et familial, tant par son âge (de 5 à 80 ans) que par la mixité sociale que l’on peut constater. Pour cette quinzième édition, le festival Drôles de Mômes posera ses valises sur le site du lac de Montendre. Légitimement, nous nous sommes questionnés sur l’impact d’un tel événement sur l’environnement.",
  },
  {
    id: "eco",
    pic: festival_pic_7,
    title: "Un évènement éco-responsable",
    text: TEXTS.ecoText,
  },
];
