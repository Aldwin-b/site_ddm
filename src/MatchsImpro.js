import pic1 from "./images/match1.jpg";
import pic2 from "./images/match2.jpg";
import pic3 from "./images/match3.jpg";
import pic4 from "./images/match4.jpg";
import pic5 from "./images/match5.jpg";
import pic6 from "./images/match6.jpg";
import pic7 from "./images/match7.jpg";
import pic8 from "./images/match8.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MatchsImpro = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 800) {
    return (
      <div className="match_container">
        <div className="match_rules_container">
          <div className="match_column">
            <div className="match_title">
              <span className="title">Les matchs d'impro</span>
            </div>
            <div className="match_text">
              <div className="text_W">
                <br />
                Le match d’improvisation est un grand traditionnel du festival,
                présent depuis sa première édition en 2005 !
                <br />
              </div>
              <div className="text_W">
                <br />
                Chaque année depuis, plusieurs équipes s’affrontent en
                improvisations courtes, mixtes ou comparées, à l’aide de thèmes
                et contraintes dictés par un jury excentrique. Pendant que les
                équipes préparent les impros, une chorégraphie est proposée au
                public par le jury. A l’issu des impros, le public départage les
                équipes via l’applaudimètre ou via des cartons aux couleurs des
                équipes.
                <br />
              </div>
            </div>
          </div>
          <div className="match_column">
            <div className="match_circle">
              <div className="row">
                <div className="textbox">
                  <div className="title3">Improvisation</div>
                  <div className="text_verysmall_W">
                    Ici, courte scène ou histoire (entre 3 et 5 min) créée sur
                    le moment par les comédien·ne·s en fonction d’un thème et
                    d’une contrainte.
                  </div>
                </div>
              </div>
              <div className="double_row">
                <div className="sub_column">
                  <div className="textbox">
                    <div>
                      <div className="title3">Impro comparée</div>
                      <div className="text_verysmall_W">
                        Les deux équipes s’affrontent l’une après l’autre sur le
                        même thème et la même contrainte.
                      </div>
                    </div>
                  </div>
                  <div className="textbox">
                    <div className="title3">Thème</div>
                    <div className="text_verysmall_W">
                      Sujet à respecter pour l’improvisation. Exemples donnés en
                      2022 : « Une messe, un enterrement » ; « Le dernier
                      caillou » ; « Horoscope » ; « 2 degrés, ça va ! » ; « Si
                      on m’avait dit que… ».
                    </div>
                  </div>
                </div>
                <div className="sub_column">
                  <div className="title">Vocabulaire</div>
                </div>
                <div className="sub_column">
                  <div className="textbox">
                    <div className="title3">Contrainte</div>
                    <div className="text_verysmall_W">
                      Exemples : Sitcom / Comédie musicale / Western / Ni oui ni
                      non / Jouer sur scène et dans le public, etc.
                    </div>
                  </div>
                  <div className="textbox">
                    <div className="title3">Jury</div>
                    <div className="text_verysmall_W">
                      C’est lui qui présente le match, dicte thèmes et
                      contraintes, fixe les règles du match, détermine l’espace
                      de jeu, peut se permettre d’intervenir durant une impro,
                      compte les points, et remet le prix à l’équipe gagnante.
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="textbox">
                  <div className="title3"> Applaudimètre</div>
                  <div className="text_verysmall_W">
                    On demande au public d’applaudir pour une équipe, puis pour
                    l’autre. Celle pour laquelle le public a applaudi le plus
                    fort remporte le duel !
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="edition_container">
          <div className="edition_title">
            <span className="title2_big">
              Retour en images sur l'édition 2022
            </span>
          </div>
          <div className="edition_text">
            <span className="text_G">
              Les Combinés Nordiques du Pacifique (équipe rouge) affrontaient
              les Canarikiski (équipe jaune)
            </span>
          </div>
          <div className="edition_photos">
            <div className="carousel">
              <Carousel>
                <div>
                  <img src={pic1} className="pic_edition" alt="Pic1" />
                </div>
                <div>
                  <img src={pic2} className="pic_edition" alt="Pic2" />
                </div>
                <div>
                  <img src={pic3} className="pic_edition" alt="Pic3" />
                </div>
                <div>
                  <img src={pic4} className="pic_edition" alt="Pic4" />
                </div>
                <div>
                  <img src={pic5} className="pic_edition" alt="Pic5" />
                </div>
                <div>
                  <img src={pic6} className="pic_edition" alt="Pic6" />
                </div>
                <div>
                  <img src={pic7} className="pic_edition" alt="Pic7" />
                </div>
                <div>
                  <img src={pic8} className="pic_edition" alt="Pic8" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="match_container">
        <div className="mobile_page_title"> Les matchs d'impro</div>
        <div className="match_main_text">
          Le match d’improvisation est un grand traditionnel du festival,
          présent depuis sa première édition en 2005 !{" "}
          <div>
            <br />
            Chaque année depuis, plusieurs équipes s’affrontent en
            improvisations courtes, mixtes ou comparées, à l’aide de thèmes et
            contraintes dictés par un jury excentrique. Pendant que les équipes
            préparent les impros, une chorégraphie est proposée au public par le
            jury. A l’issu des impros, le public départage les équipes via
            l’applaudimètre ou via des cartons aux couleurs des équipes.
          </div>
        </div>
        <div className="mobile_subtitle">Retour sur l'édition 2022 </div>
        <div className="match_main_text">
          Les Combinés Nordiques du Pacifique (équipe rouge) affrontaient les
          Canarikiski (équipe jaune).
        </div>
        <div className="edition_photos">
          <div className="carousel">
            <Carousel>
              <div>
                <img src={pic1} className="pic_edition" alt="Pic1" />
              </div>
              <div className="carousel">
                <img src={pic2} className="pic_edition" alt="Pic2" />
              </div>
              <div className="carousel">
                <img src={pic3} className="pic_edition" alt="Pic3" />
              </div>
              <div className="carousel">
                <img src={pic4} className="pic_edition" alt="Pic4" />
              </div>
              <div className="carousel">
                <img src={pic5} className="pic_edition" alt="Pic5" />
              </div>
              <div className="carousel">
                <img src={pic6} className="pic_edition" alt="Pic6" />
              </div>
              <div className="carousel">
                <img src={pic7} className="pic_edition" alt="Pic7" />
              </div>
              <div className="carousel">
                <img src={pic8} className="pic_edition" alt="Pic8" />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="mobile_subtitle"> Vocabulaire</div>
        <div className="vocab">
          <div className="vocab_row">
            <div className="vocab_col">
              <div className="vocab_title">Improvisation</div>
              <div className="vocab_text">
                Ici, courte scène ou histoire (entre 3 et 5 min) créée sur le
                moment par les comédien·ne·s en fonction d’un thème et d’une
                contrainte.
              </div>
            </div>
            <div className="vocab_col">
              <div className="vocab_title">Contrainte</div>
              <div className="vocab_text">
                Exemples : Sitcom / Comédie musicale / Western / Ni oui ni non /
                Jouer sur scène et dans le public, etc.
              </div>
            </div>
          </div>
          <div className="vocab_row">
            <div className="vocab_col">
              <div className="vocab_title">Thème</div>
              <div className="vocab_text">
                Sujet à respecter pour l’improvisation. Exemples donnés en 2022
                : « Une messe, un enterrement » ; « Le dernier caillou » ; «
                Horoscope » ; « 2 degrés, ça va ! » ; « Si on m’avait dit que…
                ».
              </div>
            </div>
            <div className="vocab_col">
              <div className="vocab_title">Jury</div>
              <div className="vocab_text">
                C’est lui qui présente le match, dicte thèmes et contraintes,
                fixe les règles du match, détermine l’espace de jeu, peut se
                permettre d’intervenir durant une impro, compte les points, et
                remet le prix à l’équipe gagnante.
              </div>
            </div>
          </div>
          <div className="vocab_row">
            <div className="vocab_col">
              <div className="vocab_title">Applaudimètre</div>
              <div className="vocab_text">
                On demande au public d’applaudir pour une équipe, puis pour
                l’autre. Celle pour laquelle le public a applaudi le plus fort
                remporte le duel !
              </div>
            </div>
            <div className="vocab_col">
              <div className="vocab_title">Impro comparée</div>
              <div className="vocab_text">
                Les deux équipes s’affrontent l’une après l’autre sur le même
                thème et la même contrainte.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MatchsImpro;
