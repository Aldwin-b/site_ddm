import main_picture from "./images/matchs/25/match_2025.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main_container">
      <div id="main_picture" className="main_picture_container">
        <img src={main_picture} className="main_picture" alt="" />
      </div>
      <div className="main_logo_text">
        <div className=" title main_title">Soirée match d'impro</div>
        <div id="text_prog" className="main_text_prog_container">
          <span className="text_W">
            <b> Le samedi 5 avril dès 20h</b>, assistez à la toute première
            cérémonie des Golden Mômes, une soirée de remise de prix célébrant
            les vingt dernières années de l'association La Machine à Bulles et
            du festival Drôles de Mômes.
            <br />
            <br />
            L'entrée sera à <b>prix libre</b> et tous les bénéfices de la soirée
            serviront à organiser la prochaine du festival Drôles de Mômes{" "}
            <b>les 11 et 12 juillet 2025 !</b> <br />
            <br />
            Le match d'improvisation sera suivi d'un concert du groupe BoKaL et
            d'un DJ set surprise.
          </span>
        </div>

        <div id="prog" className="button_container">
          <button className="button">
            <Link className="link" to="/matchsimpro?match=1">
              EN SAVOIR PLUS{" "}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
