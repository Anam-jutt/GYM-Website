import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Clubs from "./pages/Clubs";
import JoinClub from "./pages/JoinClub";
import Page from "./pages/Page404";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MemberBenefits from "./pages/MemberBenefits";
import Classes from "./pages/Classes";
import Pilates from "./pages/Pilates";
import PersonalTraining from "./pages/PersonalTraining";
import SPA from "./pages/SPA";
import JoinOnline from "./pages/JoinOnline"; 
import ShowData from "./pages/ShowData"; 
import WelcomePage from "./pages/WelcomePag";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Clubs" element={<Clubs />} />
          <Route path="/JoinClub" element={<JoinClub />} />
          <Route path="/MemberBenefits" element={<MemberBenefits />} />
          <Route path="/Classes" element={<Classes />} />
          <Route path="/Pilates" element={<Pilates />} />
          <Route path="/PersonalTraining" element={<PersonalTraining />} />
          <Route path="/JoinOnline" element={<JoinOnline />} />
          <Route path="/showData" element={<ShowData />} /> 
          <Route path="/edit/:id" element={<Edit />} /> 
          <Route path="/welcomePage" element={<WelcomePage />} />
          <Route path="/*" element={<Page />} />
          <Route path="/SPA" element={<SPA />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
