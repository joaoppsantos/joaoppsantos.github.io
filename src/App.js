import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../src/pages/Home"
import Experience from "../src/pages/Experience"
import Navbar from "../src/components/Navbar"
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
