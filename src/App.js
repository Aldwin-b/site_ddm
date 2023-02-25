import "./App.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Festival from "./Festival";

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
