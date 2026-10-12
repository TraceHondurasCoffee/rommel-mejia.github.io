import React, { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'experience', 'services', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#hero', id: 'hero' },
    { label: 'Sobre mí', href: '#about', id: 'about' },
    { label: 'Habilidades', href: '#skills', id: 'skills' },
    { label: 'Experiencia', href: '#experience', id: 'experience' },
    { label: 'Servicios', href: '#services', id: 'services' },
    { label: 'Proyectos', href: '#projects', id: 'projects' },
    { label: 'Contacto', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
      <a
        href="#hero"
        className="nav-brand"
        onClick={(e) => handleNavClick(e, '#hero')}
      >
        <span className="nav-brand-bracket">&lt;</span>
        <span>{PERSONAL_INFO.brandLogo}</span>
        <span className="nav-brand-bracket">/&gt;</span>
      </a>

      {/* Desktop Links */}
      <ul className="nav-links-desktop">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href="#contact"
        className="nav-cta-btn"
        onClick={(e) => handleNavClick(e, '#contact')}
      >
        <Send size={13} />
        <span>Contáctame</span>
      </a>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Abrir menú"
      >
        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{ fontSize: '16px' }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-cta-btn"
            onClick={(e) => handleNavClick(e, '#contact')}
            style={{ justifyContent: 'center', marginTop: '10px' }}
          >
            <Send size={14} />
            <span>Contáctame</span>
          </a>
        </div>
      )}
    </nav>
  );
}
