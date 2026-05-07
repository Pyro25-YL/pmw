import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim()) {
      alert(`Terima kasih! ${email} telah didaftarkan.`);
      setEmail('');
    }
  };

  return (
    <div className="container">
      <div className="newsletter-section reveal">
        <span className="badge" style={{ marginBottom: '16px' }}>📨 Newsletter</span>
        <h2>Stay Ahead with <span className="grad-text">Tech Insights</span></h2>
        <p>Dapatkan artikel teknologi, tips AI, dan update produk terbaru langsung ke inbox Anda.</p>
        <div className="nl-form">
          <input
            className="nl-input"
            type="email"
            placeholder="Masukkan email Anda..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
          />
          <button className="btn btn-primary" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
