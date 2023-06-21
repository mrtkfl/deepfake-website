import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Startseite from "./Startseite";
import Introductionpage from "./Game";
import Sec_page from "./sec_page";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Startseite/>} />
      <Route exact path="/sec_page" element={<Sec_page/>} />
      <Route exact path="/Introductionpage" element={<Introductionpage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;