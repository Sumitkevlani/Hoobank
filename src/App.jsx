import React from 'react';
import styles from './style.js';
import Navbar from '../src/components/Navbar.jsx';
import Hero from '../src/components/Hero.jsx';
import Billing from '../src/components/Billing.jsx';
import Business from '../src/components/Business.jsx';
import Button from '../src/components/Button.jsx';
import CardDeal from '../src/components/CardDeal.jsx';
import Clients from '../src/components/Clients.jsx';
import CTA from '../src/components/CTA.jsx';
import FeedbackCard from '../src/components/FeedbackCard.jsx';
import Footer from '../src/components/Footer.jsx';
import GetStarted from '../src/components/GetStarted.jsx';
import Stats from '../src/components/Stats.jsx';
import Testimonials from '../src/components/Testimonials.jsx';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
