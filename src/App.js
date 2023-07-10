import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FlexboxPage from "./pages/FlexboxPage";
import GridPage from "./pages/GridPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flexbox-playground" element={<FlexboxPage />} />
          <Route path="/grid-playground" element={<GridPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
