import ProgramListV from "./ProgramListV";
import ProgramListS from "./ProgramListS";
import legende from "./images/legende.png";

const Progra = () => {
  return (
    <div className="progra_container">
      <div className="progra_header">
        <div className="progra_title progra_title_main"> Programmation</div>
      </div>
      <div className="progra_cols">
        <div className="progra_col">
          <div className="progra_col_main">
            <img className="legende" src={legende} alt="legende" />
          </div>
        </div>
        <div className="progra_col">
          <div className="progra_title">
            <div className="progra_title_day "> VENDREDI 14</div>
          </div>
          <div className="progra_col_main">
            <ProgramListV />
          </div>
        </div>
        <div className="progra_col">
          <div className="progra_title">
            <div className="progra_title_day "> SAMEDI 15</div>
          </div>
          <div className="progra_col_main">
            <ProgramListS />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progra;
