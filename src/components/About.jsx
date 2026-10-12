import React from 'react';
import { PERSONAL_INFO, ABOUT_TEXTS } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div>
        <span className="sec-label">Sobre mí</span>
        <h2 className="sec-title">
          Ingeniero en Ciencias de la Computación
          <br />
          Full Stack, Arquitectura SOA & Bases de Datos.
        </h2>
      </div>

      <div className="about-grid-layout">
        {/* Bio & Details */}
        <div className="about-text-content">
          <p className="about-paragraph">
            {ABOUT_TEXTS.paragraph1}
          </p>

          <p className="about-paragraph">
            {ABOUT_TEXTS.paragraph2}
          </p>

          <div className="about-meta-grid">
            <div className="about-meta-item">
              <p className="about-meta-label">Profesión</p>
              <p className="about-meta-value">{PERSONAL_INFO.degree}</p>
            </div>
            <div className="about-meta-item">
              <p className="about-meta-label">Identidad & Edad</p>
              <p className="about-meta-value">
                {PERSONAL_INFO.identityId} · {PERSONAL_INFO.age}
              </p>
            </div>
            <div className="about-meta-item">
              <p className="about-meta-label">Ubicación</p>
              <p className="about-meta-value">{PERSONAL_INFO.location}</p>
            </div>
            <div className="about-meta-item">
              <p className="about-meta-label">Dirección</p>
              <p className="about-meta-value" style={{ fontSize: '13px' }}>
                {PERSONAL_INFO.address}
              </p>
            </div>
            <div className="about-meta-item">
              <p className="about-meta-label">Teléfonos</p>
              <p className="about-meta-value">
                {PERSONAL_INFO.phoneDisplay} / {PERSONAL_INFO.phoneSecondary}
              </p>
            </div>
            <div className="about-meta-item">
              <p className="about-meta-label">Modalidad & Disponibilidad</p>
              <p className="about-meta-value">
                {PERSONAL_INFO.modality} · {PERSONAL_INFO.availability}
              </p>
            </div>
          </div>
        </div>

        {/* Developer ID Terminal Card */}
        <div>
          <div className="engineer-card">
            <span className="card-badge-status">DISPONIBLE</span>
            <div className="card-avatar-icon">👨‍💻</div>
            <p className="card-engineer-username">
              {ABOUT_TEXTS.cardUsername}
            </p>
            <p className="card-engineer-role">{ABOUT_TEXTS.cardRole}</p>
            <div className="card-engineer-chips">
              {ABOUT_TEXTS.cardChips.map((chip, idx) => (
                <span key={idx} className="tech-chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
