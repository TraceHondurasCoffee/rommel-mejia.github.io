import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Backend', 'Base de Datos', 'DevOps', 'Seguridad', 'Cloud', 'Testing'];

  const filteredSkills = selectedCategory === 'Todos'
    ? SKILLS
    : SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="section-wrapper">
      <div>
        <span className="sec-label">Stack</span>
        <h2 className="sec-title">Tecnologías & Herramientas</h2>
      </div>

      {/* Category Tabs */}
      <div className="skills-filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`skill-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid-wrapper">
        {filteredSkills.map((skill) => (
          <div key={skill.id} className="skill-bar-card">
            <div className="skill-header-row">
              <span className="skill-title-name">
                <span style={{ fontSize: '16px' }}>{skill.icon}</span>
                <span>{skill.name}</span>
              </span>
              <span
                className="skill-percentage-value"
                style={{ color: skill.color }}
              >
                {skill.pct}%
              </span>
            </div>
            <div className="skill-track-bar">
              <div
                className="skill-fill-bar"
                style={{
                  width: `${skill.pct}%`,
                  background: `linear-gradient(90deg, ${skill.color}, #38bdf8)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
