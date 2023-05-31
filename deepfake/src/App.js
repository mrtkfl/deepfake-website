import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Startseite from "./Startseite"
import Introductionpage from "./Introductionpage"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Startseite/>} />
      <Route exact path="/Introductionpage" element={<Introductionpage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;