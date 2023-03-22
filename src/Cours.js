import "./site_styles.css";
import pic from "./images/festival_pic_1.jpg";

const Cours = () => {
  return (
    <div className="cours">
      <div className="cours_container1">
        <div className="cours_title">
          <span className="title">Les cours d'art dramatique</span>
        </div>
        <div className="cours_text_container">
          <div className="cours_text1">
            <span className="text_W">
              Notre association La Machine à Bulles propose des cours d’art
              dramatique pour les enfants et adolesecent.e.s. Cette année
              2022-2023, deux ateliers sont proposés :<br />
              <br />– Cours pour les 12-17 ans avec Alice Mourgues le vendredi
              de 18 à 20h
              <br />
              <br /> – Cours pour les 7-11 ans avec Paloma Diez le samedi de 11
              à 12h30
            </span>
          </div>

          <div className="cours_text2">
            <span className="text_W">
              L’année est divisée en deux : les cours techniques et la mise en
              scène d’un spectacle pour le festival Drôles de Mômes. Les cours
              ont pour but d’apporter une technique théâtrale nécessaire dans
              l’apprentissage du jeu : <br />
              <br />– Le rapport à la scène <br />
              <br />
              – Le rapport au partenaire, basé sur la confiance en soi et en
              l’autre <br />
              <br />
              – L’imagination à travers l’improvisation <br />
              <br />
              –La mémoire sensorielle et affective
              <br />
              <br />– L’énergie (poussée et retenue) etc.
            </span>
          </div>
        </div>
      </div>
      <div className="cours_container2">
        <div className="cours_text3">
          <span className="text_W">
            La singularité de ces ateliers réside dans le fait que l’enfant est
            considéré.e comme un.e comédien.ne à part entière. Il.elle est
            capable de développer de réelles techniques et de les assimiler pour
            les mettre au profit d’un jeu juste et précis. Le but est aussi de
            donner une vision du théâtre différente de celle du cadre scolaire.
            Les textes classiques sont revisités à travers les formes qui
            habitent l’art théâtral telles que la Comedia Dell’arte, le clown,
            le bouffon…
          </span>
        </div>
        <div className="cours_photos">
          <div className="cours_main_photo">
            <img src={pic} className="cours_big" alt="" />
          </div>
          <div className="cours_small_photo">
            <div className="cours_small_photo_row">
              <img src={pic} className="cours_small" alt="" />
              <img src={pic} className="cours_small" alt="" />
            </div>
            <div className="cours_small_photo_row">
              <img src={pic} className="cours_small" alt="" />
              <img src={pic} className="cours_small" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cours;
