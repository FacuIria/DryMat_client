import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import FAQ from './views/FAQ';
import ContactoView from './views/ContactoView';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacto" element={<ContactoView />} />
      </Routes>
    </Router>
  );
}

export default App;
