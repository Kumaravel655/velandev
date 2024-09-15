import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Features from './components/Features';
import About from './components/About';
import Technologies from './components/Technologies';
import Services from './components/Services';
import Contact from './components/Contact';
import QuickLinks from './components/QuickLinks';
import Footer from './components/Footer';
import Map from './components/Map';
import Quote from './components/Quote'; // Import the new component
import ExploreServices from './pages/ExploreServices';
import Introduction from './pages/Introduction';
import Loader from './components/Loader';
import Testimonail from './components/Testimonail';
import Web from './components/LinkPages/Web';
import Mobile from './components/LinkPages/Mobile';
import Seo from './components/LinkPages/Seo';
import DevOps from './components/LinkPages/DevOps';
import CustomSolution from './components/LinkPages/CustomSolution';
import whatappLogo from './assets/wlogo.png';


function App() {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const servicesRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'features':
        featuresRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'technologies':
        technologiesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'services':
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contacts':
        contactsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
    <Router>
      <Navbar scrollToSection={scrollToSection} />
      <Routes>
        <Route path="/" element={<>
          <div ref={homeRef}><LandingPage /></div>
          <div ref={featuresRef}><Features /></div>
          <div ref={aboutRef}><About /></div>
          <div ref={technologiesRef}><Technologies /></div>
          <div ref={servicesRef}><Services /></div>
          <div ref={contactsRef}><Contact /></div>
          <Testimonail/>
          <QuickLinks scrollToSection={scrollToSection} />
          <Footer />
        </>} />
        <Route path="/quote" element={<Quote />} /> 
        <Route path='/exploreservices' element={<ExploreServices/>}/>
        <Route path='/introduction' element={<Introduction/>}/>
        <Route path="/" element={<Services />} />
        <Route path="/Web" element={<Web />} />
        <Route path="/Mobile" element={<Mobile />} />
        <Route path="/Seo" element={<Seo />} />
        <Route path="/DevOps" element={<DevOps />} />
        <Route path="/CustomSolutions" element={<CustomSolution />} />
      </Routes>
    </Router>
    <div className="fixed bottom-4 right-2 p-4 z-[1001]">
  <a href="https://wa.me/6369472659?text=Hello How can I help you?" target="_blank">
    <img src={whatappLogo} className="w-[60px]" alt="w/a" />
  </a>
</div>
    </>
  );
}

export default App;
