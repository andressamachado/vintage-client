import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <main className="App-main"></main>
        <footer className="App-footer"></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
