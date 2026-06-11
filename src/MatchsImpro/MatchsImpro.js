import { useState, memo } from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "./MatchsImpro.css";
import { useIsMobile } from "../hooks/useIsMobile";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { matchIntro, editionsData, vocabularyData } from "./MatchsImproData";

/* ==========================================================================
   DONNÉES STATIQUES PRÉ-CALCULÉES
   ========================================================================== */
const LAST_YEAR = 2025;
const lastEdition = editionsData.find((e) => e.year === LAST_YEAR);
const pastEditions = editionsData.filter((e) => e.year !== LAST_YEAR);

const imagesByYear = {
  2022: Array.from({ length: 8 }, (_, i) =>
    require(`../images/matchs/22/match_22_${i + 1}.webp`),
  ),
  2023: Array.from({ length: 10 }, (_, i) =>
    require(`../images/matchs/23/match_23_${i + 1}.webp`),
  ),
  2024: Array.from({ length: 10 }, (_, i) =>
    require(`../images/matchs/24/match_24_${i + 1}.webp`),
  ),
  2025: Array.from({ length: 18 }, (_, i) =>
    require(`../images/matchs/25/match_25_${i + 1}.webp`),
  ),
};

/* ==========================================================================
   BOUTONS DE NAVIGATION (Mémoïsés)
   ========================================================================== */
const TabButtons = memo(({ activeTab, setActiveTab }) => (
  <div className="match_button_container text_W">
    <button
      onClick={() => setActiveTab(1)}
      className={`match_button ${activeTab === 1 ? "active" : ""}`}
    >
      DERNIÈRE ÉDITION
    </button>
    <button
      onClick={() => setActiveTab(2)}
      className={`match_button ${activeTab === 2 ? "active" : ""}`}
    >
      ÉDITIONS PRÉCÉDENTES
    </button>
    <button
      onClick={() => setActiveTab(3)}
      className={`match_button ${activeTab === 3 ? "active" : ""}`}
    >
      VOCABULAIRE
    </button>
  </div>
));
TabButtons.displayName = "TabButtons";

/* ==========================================================================
   COMPOSANT CAROUSEL RÉUTILISABLE
   ========================================================================== */
const EditionCarousel = ({ edition, titleClass = "title" }) => (
  <div className="edition_container">
    <div className={titleClass}>{edition.title}</div>
    {edition.text && <div className="text_W edition_text">{edition.text}</div>}
    <div className="edition_photos">
      <div className="carousel">
        <Carousel lazyLoad="ondemand" emulateTouch={true}>
          {imagesByYear[edition.year]?.map((src, index) => (
            <img
              key={`${edition.year}-${index}`}
              src={src}
              className="pic_edition"
              alt={`Pic${edition.year}_${index}`}
            />
          ))}
        </Carousel>
      </div>
    </div>
  </div>
);

/* ==========================================================================
   VUE DESKTOP (Mémoïsée)
   ========================================================================== */
const MatchsImproDesktop = memo(({ activeTab, setActiveTab }) => (
  <>
    <div className="match_pres_container">
      <div className="title">
        <span>Les matchs d'impro</span>
      </div>
      <div className="match_pres text_W">
        <div>
          {matchIntro.text1}
          <br />
          <br />
          {matchIntro.text2}
        </div>
      </div>
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>

    <div>
      {activeTab === 1 && lastEdition && (
        <EditionCarousel edition={lastEdition} />
      )}
      {activeTab === 2 &&
        pastEditions.map((edition) => (
          <EditionCarousel key={edition.year} edition={edition} />
        ))}
      {activeTab === 3 && (
        <div>
          <div className="title">Vocabulaire</div>
          {vocabularyData.map((item, index) => (
            <div key={index}>
              <div className="title3 match_vocab">{item.title}</div>
              <div className="text_W">{item.text}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  </>
));
MatchsImproDesktop.displayName = "MatchsImproDesktop";

/* ==========================================================================
   VUE MOBILE (Mémoïsée)
   ========================================================================== */
const MatchsImproMobile = memo(({ activeTab, setActiveTab }) => (
  <>
    <div className="mobile_page_title">Les matchs d'impro</div>
    <div className="match_main_text text_W">
      {matchIntro.text1}
      <div>
        <br />
        {matchIntro.text2}
      </div>
    </div>
    <div className="tab_buttons_mobile_wrapper">
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>

    <div>
      {activeTab === 1 && lastEdition && (
        <EditionCarousel
          edition={lastEdition}
          titleClass="title edition_title"
        />
      )}
      {activeTab === 2 &&
        pastEditions.map((edition) => (
          <EditionCarousel
            key={edition.year}
            edition={edition}
            titleClass="title edition_title"
          />
        ))}
      {activeTab === 3 && (
        <div className="vocab_container">
          {vocabularyData.map((item, index) => (
            <div key={index}>
              <div className="vocab_title">{item.title}</div>
              <div className="text_W">{item.text}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  </>
));
MatchsImproMobile.displayName = "MatchsImproMobile";

/* ==========================================================================
   COMPOSANT PRINCIPAL (Aiguilleur)
   ========================================================================== */
const MatchsImpro = () => {
  const isMobile = useIsMobile();
  const location = useLocation();

  // OPTIMISATION : Le calcul de l'URL ne tourne plus qu'UNE SEULE FOIS au montage
  const [activeTab, setActiveTab] = useState(() => {
    const query = new URLSearchParams(location.search);
    return parseInt(query.get("match"), 10) || 1;
  });

  return (
    <main className={isMobile ? "is-mobile" : "is-desktop"}>
      <div className="match_container">
        {isMobile ? (
          <MatchsImproMobile
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ) : (
          <MatchsImproDesktop
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </div>
    </main>
  );
};

export default MatchsImpro;
