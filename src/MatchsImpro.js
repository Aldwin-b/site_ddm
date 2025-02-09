import match_2025 from "./images/matchs/25/match_2025.jpg";

import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MatchsImpro = () => {
  const screenWidth = window.innerWidth;
  const images22 = Array.from({ length: 8 }, (_, i) =>
    require(`./images/matchs/22/match_22_${i + 1}.jpg`)
  );

  const images23 = Array.from({ length: 10 }, (_, i) =>
    require(`./images/matchs/23/match_23_${i + 1}.jpg`)
  );

  const images24 = Array.from({ length: 10 }, (_, i) =>
    require(`./images/matchs/24/match_24_${i + 1}.jpg`)
  );

  const query = new URLSearchParams(useLocation().search);
  const matchNumber = parseInt(query.get("match")) || 0; // Si aucun match, mettre 0

  const [activeTab, setActiveTab] = useState(matchNumber);

  if (screenWidth >= 800) {
    return (
      <div className="match_container">
        <div className="match_pres_container">
          <div className="title">
            <span>Les matchs d'impro</span>
          </div>
          <div className="match_pres text_W">
            <div>
              Le match d’improvisation est un grand traditionnel du festival,
              présent depuis sa première édition en 2005 !
              <br />
              <br />
              Chaque année depuis, plusieurs équipes s’affrontent en
              improvisations courtes, mixtes ou comparées, à l’aide de thèmes et
              contraintes dictés par un jury excentrique. Pendant que les
              équipes préparent les impros, une chorégraphie est proposée au
              public par le jury. A l’issu des impros, le public départage les
              équipes via l’applaudimètre ou via des cartons aux couleurs des
              équipes.
            </div>
          </div>
          <div className="match_button_container text_W">
            <button onClick={() => setActiveTab(1)} className="match_button">
              PROCHAINE ÉDITION
            </button>
            <button onClick={() => setActiveTab(2)} className="match_button">
              ÉDITIONS PRÉCÉDENTES
            </button>
            <button onClick={() => setActiveTab(3)} className="match_button">
              {" "}
              VOCABULAIRE
            </button>
          </div>
        </div>
        <div>
          {/* Afficher la section en fonction de l'état activeTab */}
          {activeTab === 1 && (
            <div className="match_pro">
              <div className="match_pro_text">
                <div className="match_pro_title title">Prochaine édition</div>
                <div className="text_W">
                  Cher public, vous êtes invités à la toute première cérémonie
                  des Golden Mômes.
                  <br />
                  <br />
                  Le samedi 5 avril 2025 dès 20h, assistez à une soirée de
                  remise de prix célébrant les 20 dernières années de
                  l'association et de son festival, Drôles de Mômes.
                  <br />
                  <br />
                  Le match d'improvisation sera suivi d'un concert du groupe
                  BoKaL et d'un DJ set surprise.
                  <br />
                  <br />
                  Entrée prix libre / Ouverture des portes à 20h / Buvette et
                  restauration sur place.
                </div>
              </div>
              <div className="match_affiche">
                <img src={match_2025} className="match_affiche_pic"></img>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="edition_container">
              <div className="title">Retour en images sur l'édition 2024</div>
              <div className="text_W">
                Animée par Grayoncé et Vilaine Farmer, la soirée “Qui veut
                devenir une star ?” a vu s’affronter deux équipes : les Rouge
                Chaud Chili Poivre et les Jaune Lemon
              </div>
              <div className="edition_photos">
                <div className="carousel">
                  <Carousel>
                    {images24.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        className="pic_edition"
                        alt={`Pic${24 + index}`}
                      />
                    ))}
                  </Carousel>
                </div>
              </div>
              <div className="title">Retour en images sur l'édition 2023</div>
              <div className="text_W"></div>
              <div className="edition_photos">
                <div className="carousel">
                  <Carousel>
                    {images23.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        className="pic_edition"
                        alt={`Pic${23 + index}`}
                      />
                    ))}
                  </Carousel>
                </div>
              </div>
              <div className="title">Retour en images sur l'édition 2022</div>
              <div className="text_W">
                Les Combinés Nordiques du Pacifique (équipe rouge) affrontaient
                les Canarikiski (équipe jaune)
              </div>
              <div className="edition_photos">
                <div className="carousel">
                  <Carousel>
                    {images22.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        className="pic_edition"
                        alt={`Pic${22 + index}`}
                      />
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <div className="title"> Vocabulaire</div>
              <div className="title3 match_vocab">Improvisation</div>
              <div className="text_W">
                Ici, courte scène ou histoire (entre 3 et 5 min) créée sur le
                moment par les comédien·ne·s en fonction d’un thème et d’une
                contrainte.
              </div>

              <div className="title3 match_vocab">Contrainte</div>
              <div className="text_W">
                Exemples : Sitcom / Comédie musicale / Western / Ni oui ni non /
                Jouer sur scène et dans le public, etc.
              </div>

              <div className="title3 match_vocab">Thème</div>
              <div className="text_W">
                Sujet à respecter pour l’improvisation. Exemples donnés en 2022
                : « Une messe, un enterrement » ; « Le dernier caillou » ; «
                Horoscope » ; « 2 degrés, ça va ! » ; « Si on m’avait dit que…
                ».
              </div>

              <div className="title3 match_vocab">Jury</div>
              <div className="text_W">
                C’est lui qui présente le match, dicte thèmes et contraintes,
                fixe les règles du match, détermine l’espace de jeu, peut se
                permettre d’intervenir durant une impro, compte les points, et
                remet le prix à l’équipe gagnante.
              </div>

              <div className="title3 match_vocab">Applaudimètre</div>
              <div className="text_W">
                On demande au public d’applaudir pour une équipe, puis pour
                l’autre. Celle pour laquelle le public a applaudi le plus fort
                remporte le duel !
              </div>
              <div className="title3 match_vocab">Impro comparée</div>
              <div className="text_W">
                Les deux équipes s’affrontent l’une après l’autre sur le même
                thème et la même contrainte.
              </div>
            </div>
          )}
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
                <img src={images22[0]} className="pic_edition" alt="Pic220" />
              </div>
              <div className="carousel">
                <img src={images22[1]} className="pic_edition" alt="Pic221" />
              </div>
              <div className="carousel">
                <img src={images22[2]} className="pic_edition" alt="Pic222" />
              </div>
              <div className="carousel">
                <img src={images22[3]} className="pic_edition" alt="Pic223" />
              </div>
              <div className="carousel">
                <img src={images22[4]} className="pic_edition" alt="Pic224" />
              </div>
              <div className="carousel">
                <img src={images22[5]} className="pic_edition" alt="Pic225" />
              </div>
              <div className="carousel">
                <img src={images22[6]} className="pic_edition" alt="Pic226" />
              </div>
              <div className="carousel">
                <img src={images22[7]} className="pic_edition" alt="Pic227" />
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
