import main_picture from "./images/main_picture.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main_container">
      <div id="main_picture" className="main_picture_container">
        <img src={main_picture} className="main_picture" alt="" />
      </div>
      <div className="main_logo_text">
        <div className=" title main_title"></div>
        <div id="text_prog" className="main_text_prog_container">
          <span className="text_W">
            <b> 20 ANS</b> de théâtre, de musique, d’émotions, de convivialité,
            de partage, de chapiteau, de bottes de paille, de toilettes sèches,
            de frites, de guirlandes colorées, de tivoli, de tente à palabres,
            d’émerveillement et de trac !
            <br />
            <br />
            Pour fêter ça, nous avons caché un peu partout sur le site des
            éléments de toutes nos affiches depuis 2005. Si vous en trouvez un,
            vous découvrirez au dos quel petit cadeau sera le vôtre !
          </span>
        </div>

        <div id="prog" className="button_container">
          <button className="button">
            <Link className="link" to="/programmation">
              PROGRAMMATION 2025{" "}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
