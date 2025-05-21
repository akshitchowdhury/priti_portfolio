import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainPage from './MainPage/MainPage';
import PerformanceAds from './components/Pages/PerformanceAds';
import ApparelGraphics from './components/Pages/ApparelGraphics';
import PackagingDesign from './components/Pages/PackagingDesign';
import Art from './components/Pages/Art';
import Crm from './components/Pages/Crm';
import HomePageAssets from './components/Pages/HomePageAssets';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/packaging-design" element={<PackagingDesign />} />
        <Route path="/apparel-graphics" element={<ApparelGraphics />} />
        <Route path="/performance-ads" element={<PerformanceAds />} />
        <Route path="/homepage-assets" element={<HomePageAssets />} />
        <Route path="/art" element={<Art />} />
        <Route path="/crm" element={<Crm />} />
      </Routes>
    </Router>
  );
}

export default App;
