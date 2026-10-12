import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-wrapper">
      <div>
        <span className="sec-label">Proyectos</span>
        <h2 className="sec-title">Trabajo Destacado</h2>
      </div>

      <div className="projects-cards-grid">
        {PROJECTS.map((proj) => (
          <article
            key={proj.id}
            className="project-card-item"
            style={{ '--card-color': proj.color }}
            onClick={() => setSelectedProject(proj)}
          >
            <div className="project-top-accent" />
            <span className="project-client-chip">{proj.client}</span>
            <span className="project-icon-box">{proj.icon}</span>
            <h3 className="project-title-heading">{proj.title}</h3>
            <p className="project-desc-text">{proj.desc}</p>

            <div className="project-stack-tags">
              {proj.stack.map((tech, idx) => (
                <span key={idx} className="badge-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-action-row">
              <span className="project-details-btn-text">Ver detalles técnicos</span>
              <span className="project-arrow-indicator">
                <ArrowRight size={16} />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
