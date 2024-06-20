import main_picture from "./images/main_picture.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main_container">
      <div id="main_picture" className="main_picture_container">
        <img src={main_picture} className="main_picture" alt="" />
      </div>
      <div className="main_logo_text">
        <div id="text_prog" className="main_text_prog_container">
          <span className="text_W">
            Les temps sont durs pour la culture et les petits festivals. Mais
            depuis 2005, le festival Drôles de Mômes et sa drôle d’équipe de
            bénévoles se battent pour faire vivre les arts vivants, le temps
            d’un week-end, en milieu rural. Et 2024 ne les arrêtera pas ! Cette
            équipe est multigénérationnelle, multicompétente, pleine d’idées,
            d’imagination et de rêves. Alors on s’accroche, on donne de notre
            temps et de notre énergie pour préparer le festival et lui donner
            vie, constuire en une semaine à peine un village éphémère qui
            célèbre le théâtre, la musique et le partage. La 18ème édition sera
            comme toujours joyeuse, éclectique et responsable. Vous pourrez vous
            restaurez et vous hydrater localement, vous reposer sous la tente
            saharienne, admirer les expositions, retomber en enfance avec les
            dizaines de jeux en bois qui parsèmeront notre site coloré... Et
            bien sûr profiter d’une programmation riche et variée : neuf
            spectacles et six concerts en deux jours ! Cerise sur le chapiteau,
            la Diva Mobile – la plus petite boîte de nuit du monde – sera de
            retour pour des sessions dansantes enflammées avec les plus
            grand·e·s DJ de la région.
          </span>
        </div>

        <div id="prog" className="button_container">
          <button className="button" onClick="/programmation">
            <Link className="link" to="/programmation">
              PROGRAMMATION 2024
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
