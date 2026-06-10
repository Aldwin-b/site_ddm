import "./App.css";
import { Routes, Route } from "react-router-dom";

// Standardisation des imports (sans les extensions .js)
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Festival from "./Festival/Festival";
import Benevoles from "./Benevoles/Benevoles";
import MatchsImpro from "./MatchsImpro";
import Cours from "./Cours";
import Tarifs from "./Tarifs";
import Venir from "./Venir";
import Progra from "./Progra";
import Spectacle from "./Spectacle";
import Engagement from "./Engagement";
import Partenaires from "./Partenaires";

function App() {
  return (
    <div className="The_container">
      {/* Le Header gère directement sa structure interne */}
      <Header />

      {/* Utilisation de <main> pour une meilleure sémantique SEO */}
      <main className="global_container">
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/festival" element={<Festival />} />
            <Route path="/benevoles" element={<Benevoles />} />
            <Route path="/partenaires" element={<Partenaires />} />
            <Route path="/matchsimpro" element={<MatchsImpro />} />
            <Route path="/cours" element={<Cours />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/venir" element={<Venir />} />
            <Route path="/programmation" element={<Progra />} />
            <Route path="/spectacle/:type/:id" element={<Spectacle />} />
            <Route path="/engagement" element={<Engagement />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
