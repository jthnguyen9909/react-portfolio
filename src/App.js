import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Header from "./components/Header/tempindex";
import ResponsiveAppBar from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutMe from "./components/Me";
import Proficiencies from "./components/Proficiencies";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/*" element={<Home />} /> */}
        </Routes>
        <AboutMe />
        <Proficiencies />
        <Portfolio />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
