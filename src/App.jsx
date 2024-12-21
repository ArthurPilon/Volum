import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/apps.scss";
import Accueil from "../src/pages/Acceuil"; // Correction du chemin ici si nécessaire

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
