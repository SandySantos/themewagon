import './App.css';
import Header from './components/Header';
import AboutUs from './components/home/AboutUs';
import OurFeatures from './components/home/OurFeatures';
import OurServices from './components/home/OurServices';
import OurTeam from './components/home/OurTeam';
import PricingPlan from './components/home/PricingPlan';
import Quote from './components/home/Quote';
import SomeFacts from './components/home/SomeFacts';
import Testimonial from './components/home/Testimonial';

function App() {
  return (
    <div className='App w-full h-full bg-gray-100'>
      {/* <Header /> */}
      <AboutUs />
      <SomeFacts />
      <OurServices />
      <OurFeatures />
      <PricingPlan />
      <Quote />
      <OurTeam />
      <Testimonial />
    </div>
  );
}

export default App;
