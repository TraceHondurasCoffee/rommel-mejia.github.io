import React, { useEffect } from 'react';
import { X, MessageCircle, CheckCircle2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  const quoteUrl = `https://wa.me/${PERSONAL_INFO.phoneRaw}?text=Hola%20Ing.%20Rommel%20Mej%C3%ADa%2C%20vi%20tu%20proyecto%20"${encodeURIComponent(
    project.title
  )}"%20y%20me%20gustar%C3%ADa%20consultarte%20sobre%20una%20soluci%C3%B3n%20similar%20%F0%9F%91%8B`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content-box"
        onClick={(e) => e.stopPropagation()}
        style={{ borderTop: `3px solid ${project.color}` }}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <X size={20} />
        </button>

        <span className="project-client-chip" style={{ color: project.color }}>
          {project.client}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '12px 0 16px' }}>
          <span style={{ fontSize: '32px' }}>{project.icon}</span>
          <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff' }}>
            {project.title}
          </h3>
        </div>

        <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: 1.8, marginBottom: '22px' }}>
          {project.longDesc || project.desc}
        </p>

        {project.highlights && (
          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
              // Puntos clave de arquitectura
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {project.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#e2e8f0' }}>
                  <CheckCircle2 size={16} color={project.color} />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginBottom: '28px' }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
            // Tecnologías aplicadas
          </p>
          <div className="project-stack-tags">
            {project.stack.map((t, i) => (
              <span key={i} className="badge-tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-action"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <ExternalLink size={16} />
              <span>Visitar Sitio Oficial en Vivo</span>
            </a>
          )}

          <a
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-action"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <MessageCircle size={18} />
            <span>Consultar proyecto similar por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
