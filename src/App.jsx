import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Mision from './components/vandm';
import Experience from './components/experience';
import Images from './components/images';
import ContactCard from './components/contactcard';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/mision" element={<Mision />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/images" element={<Images />} />
          <Route path="/contact" element={<ContactCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
