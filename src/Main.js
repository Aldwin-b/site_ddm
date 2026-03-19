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
            <b>
              La vingtième édition du festival Drôles de Mômes aura lieu les 10
              et 11 juillet 2026 sur un tout nouveau site !
            </b>{" "}
            <br /> <br />
            Depuis 10 ans, notre festival avait posé ses valises sur une des
            rives du Lac de Montendre et nous y adorons son côté bucolique.
            Cependant, des problèmes de chaleur excessive à répétition nous ont
            fait repenser notre position géographique et changer de rive tout en
            restant sur le site du lac Baron Desqueyroux. Ce nouveau lieu
            bénéficie de beaucoup plus de zones d’ombre, ce qui nous permettra
            de vous accueillir dans des conditions optimales, même par forte
            chaleur.
          </span>
        </div>
        {
          <div id="prog" className="button_container">
            <button className="button">
              <Link className="link">PROGRAMMATION À VENIR </Link>
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default Main;
