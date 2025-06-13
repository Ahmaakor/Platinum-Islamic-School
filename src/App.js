import './App.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
