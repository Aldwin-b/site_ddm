import "./App.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Festival from "./Festival";
import festival_pic_1 from "./images/festival_pic_1.jpg";

function App() {
  return (
    <div className="global_container">
      <div className="Header">
        <Header />
      </div>
      <div className="App">
        <Festival />
      </div>
    </div>
  );
}

export default App;
