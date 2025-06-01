import ProgramListV from "./ProgramListV";
import ProgramListS from "./ProgramListS";
import chap_pic from "./images/chap.png";
import exte_pic from "./images/exte.png";
import mus_pic from "./images/musique.png";

const Progra = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 800) {
    return (
      <div>
        <div>
          <div className="title">Programmation</div>
        </div>
        <div className="legende">
          <div className="legende_item">
            <img className="small_scene" src={chap_pic} alt="logo chap" />
            <div className="text_verysmall_W"> Chapiteau</div>
          </div>
          <div className="legende_item">
            <img className="small_scene" src={exte_pic} alt="logo exte" />
            <div className="text_verysmall_W"> Théâtre de verdure</div>
          </div>
          <div className="legende_item">
            <img className="small_scene" src={mus_pic} alt="logo musique" />
            <div className="text_verysmall_W"> Scène musique</div>
          </div>
        </div>
        <div className="progra_cols">
          <div className="progra_col">
            <div className="title">
              <div className="progra_title_day "> VENDREDI 11 JUILLET</div>
            </div>
            <div className="progra_col_main">
              <ProgramListV />
            </div>
          </div>
          <div className="progra_col">
            <div className="title">
              <div className="progra_title_day "> SAMEDI 12 JUILLET</div>
            </div>
            <div className="progra_col_main">
              <ProgramListS />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="progra_container">
        <div className="progra_header">
          <div className="progra_title progra_title_main mobile_page_title">
            Programmation
          </div>
        </div>
        <div className="legende">
          <div className="legende_item">
            <img
              className="small_scene legende_icon"
              src={chap_pic}
              alt="logo chap"
            />
            <div className="text_W legende_text"> Chapiteau</div>
          </div>
          <div className="legende_item">
            <img
              className="small_scene legende_icon"
              src={exte_pic}
              alt="logo exte"
            />
            <div className="text_W legende_text"> Théâtre de verdure</div>
          </div>
          <div className="legende_item">
            <img
              className="small_scene legende_icon"
              src={mus_pic}
              alt="logo musique"
            />
            <div className="text_W legende_text"> Scène musique</div>
          </div>
        </div>
        <div className="progra_rows">
          <div>
            <div className="progra_col">
              <div className="progra_title">
                <div className="progra_title_day "> VENDREDI 11</div>
              </div>
              <div className="progra_col_main">
                <ProgramListV />
              </div>
            </div>
            <div className="progra_col">
              <div className="progra_title">
                <div className="progra_title_day "> SAMEDI 12</div>
              </div>
              <div className="progra_col_main">
                <ProgramListS />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Progra;
