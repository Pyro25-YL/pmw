import React, { useState } from 'react';
import { CONTACT_LINKS } from '../data';

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    alert('Pesan terkirim! Kami akan menghubungi Anda dalam 1x24 jam.');
    setForm({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">

          {/* Info */}
          <div className="contact-info reveal">
            <span className="badge">📞 Contact</span>
            <h2>Siap <span className="grad-text">Berkolaborasi?</span></h2>
            <p>
              Ceritakan proyek impian Anda kepada kami. Tim NexaMind siap memberikan solusi
              terbaik yang sesuai kebutuhan dan anggaran bisnis Anda.
            </p>
            <div className="contact-links">
              {CONTACT_LINKS.map((link) => (
                <a href={link.href} className="contact-link" key={link.label}>
                  <div className="cl-icon">{link.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '13px' }}>{link.label}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text3)' }}>{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact-form reveal" style={{ transitionDelay: '0.2s' }}>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>
              Kirim Pesan
            </h3>
            <div className="form-group">
              <label className="form-label">Nama Lengkap</label>
              <input className="form-input" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Perusahaan</label>
              <input className="form-input" name="company" type="text" placeholder="PT Maju Jaya" value={form.company} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Pesan</label>
              <textarea className="form-textarea" name="message" placeholder="Ceritakan kebutuhan proyek Anda..." value={form.message} onChange={handleChange} />
            </div>
            <button
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={handleSubmit}
            >
              Kirim Pesan 🚀
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
