import './App.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import OverviewPage from './pages/OverviewPage';
import MissionPage from './pages/MissionPage';
import TeamPage from './pages/TeamPage';
import BranchesPage from './pages/BranchesPage';
import ValuesPage from './pages/ValuesPage';
import Contact from './components/Contact/Contact';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/overview' element={<OverviewPage />} />
        <Route path='/about/mission' element={<MissionPage />} />
        <Route path='/about/team' element={<TeamPage />} />
        <Route path='/about/branches' element={<BranchesPage />} />
        <Route path='/about/values' element={<ValuesPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
