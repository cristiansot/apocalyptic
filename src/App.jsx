import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Releases from './pages/Releases';
import ImagePopup from './components/ImagePopup';

function App() {
  return (
    <HashRouter>
      {/* ImagePopup debe estar fuera de Routes para que sea global */}
      <ImagePopup />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/releases" element={<Releases />} />
      </Routes>
    </HashRouter>
  );
}

export default App;