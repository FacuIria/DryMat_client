import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import FAQ from './views/FAQ';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
