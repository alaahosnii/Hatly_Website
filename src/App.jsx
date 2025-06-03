import { Route, Routes } from 'react-router-dom';
import './index.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader/Loader';
import TemporaryDrawer from './Components/Drawer';
import FrequentlyAsked from './Components/F&Qs';
import TermsOfService from './Components/TermsOfService';
import PrivacyPolicy from './Components/PrivacyPolicy';
import WhatsAppButton from './Components/WhatsAppButton';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fakeDataFetch();
  }, []);

  return  (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
     {isLoading?null: <TemporaryDrawer />}

      <Routes>
        
       
        <Route path="/" element={isLoading?<Loader/>:<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/frequently-asked" element={<FrequentlyAsked />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
      {isLoading?null:<WhatsAppButton />}
    </div>
  );
}

export default App;
