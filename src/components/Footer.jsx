import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <span className="footer-copy-text">
        © {new Date().getFullYear()} {PERSONAL_INFO.fullName} · {PERSONAL_INFO.location} · {PERSONAL_INFO.email}
      </span>

      <div className="footer-links-row">
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link-item"
        >
          LinkedIn
        </a>
        <a
          href={PERSONAL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link-item"
          style={{ color: '#25d366' }}
        >
          WhatsApp
        </a>
        <a href={`mailto:${PERSONAL_INFO.email}`} className="footer-link-item">
          Email
        </a>

        <button
          onClick={scrollToTop}
          className="scroll-top-btn"
          aria-label="Volver arriba"
          title="Volver arriba"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
