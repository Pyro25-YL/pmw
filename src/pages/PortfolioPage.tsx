import React from 'react';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';

const Divider: React.FC = () => <div className="section-divider" />;

const PortfolioPage: React.FC = () => (
  <>
    <Portfolio />
    <Divider />
    <Testimonials />
  </>
);

export default PortfolioPage;
