import React from 'react';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';

const Divider: React.FC = () => <div className="section-divider" />;

const ContactPage: React.FC = () => (
  <>
    <Contact />
    <Divider />
    <Newsletter />
  </>
);

export default ContactPage;
