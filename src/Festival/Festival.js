import { useIsMobile } from "../hooks/useIsMobile"; // Import du hook centralisé
import { TEXTS, FEATURES_BLOCK_1, FEATURES_BLOCK_2 } from "./FestivalData";
import "./Festival.css";

import festival_pic_1 from "../images/lefestival1.jpg";
import logoW from "../images/logo_W.png";

const COMBINED_FEATURES = [...FEATURES_BLOCK_1, ...FEATURES_BLOCK_2];

/* ==========================================================================
   SOUS-COMPOSANTS RÉUTILISABLES
   ========================================================================== */
const TextBox = ({ title, text }) => (
  <article className="textbox">
    <h3 className="title3">{title}</h3>
    <p className="text_small_W">{text}</p>
  </article>
);

/* ==========================================================================
   VUE DESKTOP
   ========================================================================== */
const FestivalDesktop = () => (
  <>
    <section className="festival_container_1">
      <div className="festival_text">
        <h1 className="title">Le festival</h1>
        <p className="text_W">{TEXTS.presentation}</p>
      </div>
      <div className="festival_container_picture">
        <img
          src={festival_pic_1}
          className="festival_picture"
          alt="Présentation du festival"
        />
      </div>
    </section>

    <section className="festival_container_2">
      {FEATURES_BLOCK_1.map(({ id, pic, title, text }) => (
        <article className="festival_column" key={id}>
          <img src={pic} className="festival_pic" alt={title} />
          <h2 className="festival_title2 title2">{title}</h2>
          <p className="festival_text_B text_B">{text}</p>
        </article>
      ))}
    </section>

    <section className="festival_container_3">
      <div className="festival_row">
        <TextBox title="Territoire" text={TEXTS.territoire} />
      </div>
      <div className="festival_row2">
        <div className="festival_sub_column">
          <TextBox title="Communication" text={TEXTS.communication} />
          <TextBox title="Tri des déchets" text={TEXTS.dechets} />
        </div>
        <div className="festival_sub_column">
          <img src={logoW} className="logoW" alt="Logo Festival" />
        </div>
        <div className="festival_sub_column">
          <TextBox title="Décors" text={TEXTS.decors} />
          <TextBox title="Toilettes sèches" text={TEXTS.toilettes} />
        </div>
      </div>
      <div className="festival_row">
        <TextBox title="Verres réutilisables" text={TEXTS.verres} />
      </div>
    </section>

    <section className="festival_container_4">
      <div className="festival_column_pictures">
        {FEATURES_BLOCK_2.map(({ id, pic, title }) => (
          <img
            key={id}
            src={pic}
            className="festival_pic_wrapped"
            alt={title}
          />
        ))}
      </div>
      <div className="festival_column_text">
        {FEATURES_BLOCK_2.map(({ id, title, text }) => (
          <article className="festival_row_text" key={id}>
            <h2 className="title2">{title}</h2>
            <p className="text_B">{text}</p>
          </article>
        ))}
      </div>
    </section>
  </>
);

/* ==========================================================================
   VUE MOBILE
   ========================================================================== */
const FestivalMobile = () => (
  <div className="festival_container">
    <section className="festival_container_1">
      <h1 className="mobile_page_title">Présentation</h1>
      <div className="festival_container_picture">
        <img
          src={festival_pic_1}
          className="festival_picture"
          alt="Présentation du festival"
        />
      </div>
      <div className="festival_text">
        <p className="text_W">{TEXTS.presentation}</p>
      </div>
    </section>

    <section className="festival_container_2">
      {COMBINED_FEATURES.map(({ id, pic, title, text }) => (
        <article key={id}>
          <div className="fest_contain">
            <img src={pic} className="fest_pic" alt={title} />
          </div>
          <div className="festival_title2_container">
            <span className="title2">{title}</span>
          </div>
          <div className="festival_container_text">
            <p className="text_W">{text}</p>
          </div>
        </article>
      ))}
    </section>
  </div>
);

/* ==========================================================================
   COMPOSANT PRINCIPAL (Aiguilleur)
   ========================================================================== */
const Festival = () => {
  const isMobile = useIsMobile(); // Plus aucun "800px" écrit ici !

  // On injecte les classes dynamiques sur le conteneur principal pour aider le CSS futur
  return (
    <main className={isMobile ? "is-mobile" : "is-desktop"}>
      {isMobile ? <FestivalMobile /> : <FestivalDesktop />}
    </main>
  );
};

export default Festival;
