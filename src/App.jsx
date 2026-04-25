// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Home from './pages/Home';
// import Releases from './pages/Releases';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/releases" element={<Releases />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { HashRouter, Routes, Route } from 'react-router-dom'; // Cambiado a HashRouter
import './App.css';
import Home from './pages/Home';
import Releases from './pages/Releases';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/releases" element={<Releases />} />
      </Routes>
    </HashRouter>
  );
}

export default App;