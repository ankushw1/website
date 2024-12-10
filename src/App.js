import './App.css';
import HeroSection from './components/HeroSection';
import FutureSection from './components/FutureSection'
import Footer from './components/Footer';
import IntegrationsSection from './components/IntegrationsSection';
import TravelPageSection from './components/TravelPageSection';
import PartnersSection from './components/PartnersSection';

function App() {
  return (
    <div>
      <HeroSection/>
      <FutureSection/>
      <IntegrationsSection/>
      <TravelPageSection/>
      <PartnersSection/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
