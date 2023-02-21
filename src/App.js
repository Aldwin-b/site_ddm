import "./App.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Festival from "./Festival";

function App() {
  return (
    <div className="global_container">
      <Header />
      <div className="App">
        <Main />
      </div>
    </div>
  );
}

export default App;
