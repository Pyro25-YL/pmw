import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq">
      <div className="container">
        <div className="section-header reveal">
          <span className="badge">❓ FAQ</span>
          <h2>Pertanyaan yang <span className="grad-text">Sering Ditanyakan</span></h2>
        </div>
        <div className="faq-list" id="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <div
              className={`faq-item${openIndex === i ? ' open' : ''}`}
              key={item.question}
              onClick={() => toggle(i)}
            >
              <div className="faq-q">
                {item.question}
                <span className="faq-arrow">▼</span>
              </div>
              <div className="faq-a">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
