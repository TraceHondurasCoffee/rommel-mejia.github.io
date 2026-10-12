import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO, TYPEWRITER_ROLES, HERO_STATS } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = TYPEWRITER_ROLES[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 70);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % TYPEWRITER_ROLES.length);
      timeout = setTimeout(() => {}, 200);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const displayedText = TYPEWRITER_ROLES[roleIndex].substring(0, charIndex);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid-pattern" />
      <div className="hero-glow-orb" />

      <div className="hero-inner">
        {/* Status Pill */}
        <div className="hero-status-pill">
          <span className="hero-pulse-dot" />
          <span>{PERSONAL_INFO.statusText}</span>
        </div>

        {/* Hero Name */}
        <h1 className="hero-name-title">
          Rommel <span className="highlight">Ariel</span>
          <br />
          Mejía Estrada
        </h1>

        {/* Typewriter subtitle */}
        <div className="hero-typewriter-container">
          <span className="hero-typewriter-text">{displayedText}</span>
          <span className="hero-cursor">|</span>
        </div>

        {/* Metric stats */}
        <div className="hero-stats-row">
          {HERO_STATS.map((stat, i) => (
            <div key={i} className="hero-stat-card">
              <span className="hero-stat-value">{stat.val}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Action CTA buttons */}
        <div className="hero-actions">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="btn-primary-action"
          >
            <span>Ver Proyectos</span>
            <ArrowRight size={16} />
          </a>

          <a
            href={PERSONAL_INFO.whatsappHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-action"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-indicator-line" />
        <span className="scroll-indicator-text">Scroll</span>
      </div>
    </section>
  );
}
