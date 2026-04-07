import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Releases from './pages/Releases';
import HowToBuy from './pages/HowToBuy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/how-to-buy" element={<HowToBuy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;