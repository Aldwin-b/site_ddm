import main_picture from "./images/main_picture.png";

const Main = () => {
  return (
    <div className="main_container">
      <div id="main_picture" className="main_picture_container">
        <img src={main_picture} alt="" />
      </div>
      <div id="text_prog" className="main_text_prog_container">
        <div id="text" className="main_text_container">
          <p>
            Chaque année, le temps d’un week-end, la magie de la scène illumine
            le regard des spectateur.rice.s. Drôles de Mômes permet au public
            d’accéder à des créations de qualité, et de connaître ces frissons
            que seuls les arts vivants peuvent faire naître. Vous êtes
            invité.e.s à venir vous asseoir sous le chapiteau, à rencontrer les
            artistes dans la yourte, à danser devant les concerts, à discuter
            autour d’un verre à la buvette et à croiser la joyeuse équipe des
            bénévoles. Entre plaisir et culture, ce festival avant tout familial
            transporte ses hôtes vers un univers poétique où divertissement et
            détente sont de mise.
          </p>
          <p>
            Drôles de Mômes, ce sont aussi des échanges étonnants, un carrefour
            entre les générations, une parenthèse pour se retrouver grâce aux
            arts de la scène.
          </p>
        </div>
        <div id="prog" className="prog_container">
          <button>Programmation 2023</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
