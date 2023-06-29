import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Startseite from "./Startseite";
import Game from "./Game";
import Sec_page from "./sec_page";
import FinalScorePage from './FinalScorePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Startseite/>} />
      <Route exact path="/Erklärung" element={<Sec_page/>} />
      <Route exact path="/Spiel" element={<Game/>} />
      <Route exact path="/final-score" element={<FinalScorePage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;