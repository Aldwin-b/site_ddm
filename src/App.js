import "./App.css";
import Festival from "./Festival";
import MatchsImpro from "./MatchsImpro";
import Header from "./Header.js";
//import Main from "./Main.js";
import Cours from "./Cours";

function App() {
  return (
    <div className="global_container">
      <div className="Header">
        <Header />
      </div>
      <div className="App">
        <MatchsImpro />
      </div>
    </div>
  );
}

export default App;
