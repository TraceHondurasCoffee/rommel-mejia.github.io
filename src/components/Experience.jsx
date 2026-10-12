import React from 'react';
import { Building2, ExternalLink } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <div>
        <span className="sec-label">Experiencia</span>
        <h2 className="sec-title">Trayectoria Profesional</h2>
      </div>

      <div className="timeline-container">
        <div className="timeline-vertical-line" />

        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="experience-card-item">
            {/* Timeline Dot */}
            <div className={`timeline-dot ${!exp.isCurrent ? 'dim-dot' : ''}`} />

            {/* Period */}
            <span className={`exp-period-badge ${!exp.isCurrent ? 'dim' : ''}`}>
              {exp.period}
            </span>

            {/* Role & Company */}
            <h3 className="exp-role-title">{exp.role}</h3>
            <p className="exp-company-name">{exp.company}</p>
            <p className="exp-location-text">{exp.location}</p>

            {/* Client / Featured Project Badge if present */}
            {exp.clientBadge && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '14px' }}>
                <div className="exp-client-badge" style={{ marginBottom: 0 }}>
                  <Building2 size={14} />
                  <span>{exp.clientBadge}</span>
                </div>

                {exp.projectUrl && (
                  <a
                    href={exp.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--green)',
                      fontSize: '12px',
                      fontFamily: 'var(--mono)',
                      background: 'rgba(34, 211, 165, 0.08)',
                      border: '1px solid rgba(34, 211, 165, 0.3)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(34, 211, 165, 0.18)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(34, 211, 165, 0.08)')}
                  >
                    <span>{exp.projectUrlLabel || 'Visitar Sitio'}</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            )}

            {/* Description */}
            <p className="exp-desc-paragraph">{exp.description}</p>

            {/* Bullet points */}
            {exp.bullets && exp.bullets.length > 0 && (
              <ul className="exp-bullet-points">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="exp-bullet-item">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Tags */}
            <div className="exp-tech-tags">
              {exp.tags.map((tag, idx) => (
                <span key={idx} className="badge-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
