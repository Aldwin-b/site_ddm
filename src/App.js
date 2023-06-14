import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import Main from "./Main.js";
import Festival from "./Festival";
import Benevoles from "./Benevoles";
import MatchsImpro from "./MatchsImpro";
import Cours from "./Cours";
import Tarifs from "./Tarifs";
import Venir from "./Venir";
import Progra from "./Progra";
import Spectacle from "./Spectacle";
function App() {
  return (
    <div className="global_container">
      <div className="Header">
        <Header />
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/festival" element={<Festival />} />
          <Route path="/benevoles" element={<Benevoles />} />
          <Route path="/matchsimpro" element={<MatchsImpro />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/venir" element={<Venir />} />
          <Route path="/programmation" element={<Progra />} />
          <Route path="/spectacle/:type/:id" element={<Spectacle />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
