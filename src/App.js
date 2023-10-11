import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
